<template>
  <div>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
      class="mb-5"
    >
      <v-carousel-item v-for="(slide, n) in slides" :key="n">
        <v-sheet color="grey lighten-3" height="100%">
          <v-img src="/img/black_soap.png" height="100%" class="px-10 pt-10">
            <v-row justify="end">
              <v-col cols="12" sm="6" class="mt-md-10 py-10">
                <div class="display-2 text-capitalize font-weight-bold">
                  {{ slide }} choice van haff pink
                </div>
                <div class="title">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est
                </div>
              </v-col>
            </v-row>
            <template v-slot:placeholder>
              <v-row align="center" justify="center" class="fill-height">
                <v-progress-circular indeterminate color="primary" />
              </v-row>
            </template>
          </v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- Latest Products-->
    <Heading title="our bestsellers" />
    <v-sheet class="mb-5">
      <v-container>
        <v-row justify="center" align="center">
          <v-col
            v-for="(product, p) in products"
            :key="p"
            cols="10"
            sm="6"
            md="4"
          >
            <v-card flat :to="`/product/${product.id}`">
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
                  <div
                    class="font-weight-bold subtitle-1 text-capitalize text-center"
                  >
                    {{ product.name }}
                  </div>
                  <div class="subtitle-2">N{{ product.price }}</div>
                </v-sheet>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-pagination
              :length="10"
              :value="1"
              :total-visible="7"
              class="my-7 pagination py-2"
              color="primary--text"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    }
  },
  computed: {
    products() {
      return this.$store.getters['shop/products']
    },
  },
  head() {
    return {
      title: 'Beauty Shop',
    }
  },
}
</script>

<style></style>
