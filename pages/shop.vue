<template>
  <div id="shop">
    <v-carousel
      cycle
      height="300"
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
      class="mb-5"
    >
      <v-carousel-item
        v-for="(slide, n) in slides" 
        :key="n"
      >
        <v-sheet
          color="grey darken-4"
          height="300"
        >
          <v-img 
            src="/img/snowcup.jpg"
            height="100%"
            class="px-10"
          >
            <v-row 
              align="center"
              justify="end" 
              class="fill-height"
            >
              <v-col cols="12" sm="6">
                <div class="text-capitalize" style="font-size: 42px">
                  {{ slide }} choice van haff pink <br>
                </div>
                <div>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque 
                  nihil impedit quo minus id quod maxime placeat facere possimus, 
                  omnis voluptas assumenda est
                </div>
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
    <heading title="Now in stock"/>
    <v-sheet class="mb-5">
      <v-container>
        <v-row justify="center" align="center">
          <v-col 
            cols="12" sm="6" md="4" lg="3" 
            v-for="i in 12" :key="i"
          >
            <v-img
              src="/img/products/makeup-pencil.png"
              class="d-flex align-end pa-3"
            >
              <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2 text-center">
                <h3 class="text-capitalize text-center">
                  Product {{ i }}
                </h3>
                <div>N 2500</div>
              </v-sheet>
            </v-img>
          </v-col>
        </v-row>
        <v-pagination 
          :length="page.length" 
          v-model="page.num"
          total-visible="7"
          dark
          class="my-7"
        >
        </v-pagination>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  components: {
    heading: () => import('~/components/heading')
  },
  data() {
    return {
      page: { num: 1, length: 10 },
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ]
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