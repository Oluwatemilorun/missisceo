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
      <v-carousel-item
        v-for="(slide, n) in slides" 
        :key="n"
      >
        <v-sheet
          color="grey lighten-3"
          height="450"
        >
          <v-img 
            src="/img/black_soap.png"
            height="100%"
            class="px-10 pt-10"
          >
            <v-row 
              justify="end"
            >
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
    <heading title="Our best-sellings"/>
    <v-sheet class="mb-5">
      <v-container>
        <v-row justify="center" align="center">
          <v-col 
            cols="10" sm="6" md="4" 
            v-for="(img, i) in products" :key="i"
          >
            <v-img
              :src="`/img/${img}.png`"
              class="d-flex align-end pa-3"
              height="350"
            >
              <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2 text-center">
                <h3 class="text-capitalize text-center">
                  Product {{ i + 1 }}
                </h3>
                <h4>&#8358;2500</h4>
              </v-sheet>
            </v-img>
          </v-col>
        </v-row>
        <v-pagination 
          :length="page.length" 
          v-model="page.num"
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
      ],
      products: [
        'makeup-1',
        'makeup-2',
        'makeup-3',
        'makeup-4',
        'makeup-5',
        'makeup-6',
        'makeup-1',
        'makeup-2',
        'makeup-3',
        'makeup-4',
        'makeup-5',
        'makeup-6'
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