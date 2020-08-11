<template>
  <div id="shop">
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
      class="mb-5"
    >
      <v-carousel-item v-for="(slide, n) in slides" :key="n">
        <v-sheet color="grey lighten-3" height="450">
          <v-img 
            src="/img/black_soap.png"
            height="100%"
            class="px-10 pt-10"
          >
            <v-row justify="end">
              <v-col cols="12" sm="6" class="mt-md-10 py-10">
                <h1 class="text-capitalize" style="font-size: 36px">
                  {{ slide }} choice van haff pink <br>
                </h1>
                <h4 class="font-weight-thin">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque 
                  nihil impedit quo minus id quod maxime placeat facere possimus, 
                  omnis voluptas assumenda est
                </h4>
              </v-col>
            </v-row>
            <template v-slot:placeholder>
              <v-row align="center" justify="center" class="fill-height">
                <v-progress-circular indeterminate color="primary">
                </v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- Latest Products-->
    <Heading title="our bestsellers"/>
    <v-sheet class="mb-5">
      <v-container>
        <v-row justify="center" align="center">
          <v-col 
            cols="6" sm="6" md="4" 
            v-for="(product, p) in products" 
            :key="p"
          >
            <v-card flat tile :to="`/product/${product.id}`">
              <v-img
                :src="product.img"
                class="d-flex align-end pa-3"
                height="300"
              >
                <v-sheet 
                  tile 
                  color="rgba(255,255,255,0.8)" 
                  class="pa-2 text-center"
                >
                  <h3 class="text-capitalize text-center">
                    {{ product.name }}
                  </h3>
                  <h4> N{{ product.price }} </h4>
                </v-sheet>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination 
          :length="10" 
          :value="1"
          total-visible="7"
          circle
          class="my-7 pagination py-2"
          color="primary--text" 
        >
        </v-pagination>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import Heading from "~/components/Heading";

export default {
  components: {
    Heading
  },
  data() {
    return {
      dialog: [],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ]
    }
  },
  computed: {
    products() {
      return this.$store.getters['shop/products'];
    }
  },
  head() {
    return {
      title: 'Beauty Shop'
    };
  }
}
</script>

<style>

</style>