<template>
  <div id="product">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="6">
          <v-row>
            <v-col cols="2" class="py-0">
              <v-row justify="end">
                <v-col cols="12" v-for="x in 4" :key="x">
                  <v-card height="70" flat tile>
                    <v-img src="/img/makeup-5.png" height="70"/>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="10" class="py-0">
              <v-card flat tile>
                <v-img :src="product.img" height="100%" contain/>
              </v-card>
              <div class="ma-5">
                <v-icon large class="mr-3" color="accent darken-1">
                  mdi-facebook
                </v-icon>
                <v-icon large color="accent lighten-1">
                  mdi-twitter
                </v-icon>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="px-10 px-md-3">
          <h2 class="mb-2">{{ product.name }}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing 
            elit. Est blanditiis dolorem culpa incidunt minus 
            dignissimos deserunt repellat aperiam quasi sunt 
            officia expedita beatae cupiditate, maiores 
            repudiandae, nostrum, reiciendis facere nemo! Cons 
            purus sit amet fermentum. Cras justo odio, dapibus ac 
            facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            <v-btn color="primary" depressed large>Shop now</v-btn>
          </p>
          <Heading title="Related products"/>
          <v-row>
            <v-col cols="6" sm="4" v-for="(prod, d) in products.slice(2,7)" :key="d">
              <v-img
                :src="prod.img"
                class="d-flex align-end pa-3"
                height="250"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Heading from "~/components/Heading";

export default {
  async asyncData({ params }) {
    const id = await params.id;
    return { id }
  },
  components: {
    Heading
  },
  computed: {
    products() {
      return this.$store.getters['shop/products'];
    },
    product() {
      return this.products.find(el => el.id === this.id)
    },
  },
  head() {
    const title = this.product.name;
    return {
      title
    }
  }
}
</script>

<style>

</style>