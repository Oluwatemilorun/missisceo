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
    <heading title="Our bestsellers"/>
    <v-sheet class="mb-5">
      <v-container>
        <v-row justify="center" align="center">
          <v-col 
            cols="6" sm="6" md="4" 
            v-for="(img, i) in products" :key="i"
          >
            <v-dialog
              v-model="dialog[i]"
            >
              <template v-slot:activator="{on}">
                <v-card flat tile link v-on="on">
                  <v-img
                    :src="`/img/${img}.png`"
                    class="d-flex align-end pa-3"
                    height="300"
                  >
                    <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2 text-center">
                      <h3 class="text-capitalize text-center">
                        Product {{ i + 1 }}
                      </h3>
                      <h4>N2500</h4>
                    </v-sheet>
                  </v-img>
                </v-card>
              </template>
              <v-card class="pa-10">
                <div>
                  <v-row>
                    <v-col cols="12" md="6">
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
                          <v-card height="400" flat tile>
                            <v-img :src="`/img/${img}.png`" height="100%"/>
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
                    <v-col cols="12" md="6">
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing 
                        elit. Est blanditiis dolorem culpa incidunt minus 
                        dignissimos deserunt repellat aperiam quasi sunt 
                        officia expedita beatae cupiditate, maiores 
                        repudiandae, nostrum, reiciendis facere nemo! Cons 
                        purus sit amet fermentum. Cras justo odio, dapibus ac 
                        facilisis in, egestas eget quam. Morbi leo risus, porta
                         ac consectetur ac, vestibulum at eros.
                      </div>
                      <p>
                        <v-btn color="blue-grey lighten-3" depressed large>Shop now</v-btn>
                      </p>
                      <heading title="Related products"/>
                      <v-row>
                        <v-col cols="6" sm="4" v-for="(pic,u) in products.slice(2,7)" :key="u">
                          <v-img
                            :src="`/img/${pic}.png`"
                            class="d-flex align-end pa-3"
                            height="200"
                          >
                          </v-img>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-dialog>
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
      dialog: [],
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