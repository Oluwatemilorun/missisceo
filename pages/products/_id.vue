<template>
  <div id="single-product" style="margin-top: 120px">
    
    <v-sheet dark tile height="150" class="text-center">
    <v-img 
      src="/img/banner1.jpg"
      min-height="150"
      full-width
      gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)"
    >
      <v-row justify="center" align="center" class="fill-height">
        <v-breadcrumbs>
          <v-breadcrumbs-item v-for="item in links" :key="item">
            {{ item }} <span class="pl-2">/</span>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item disabled class="headline">
            {{ product.name }}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-row>
    </v-img>
    
  </v-sheet>
    
    <v-sheet 
      color="white" 
      class="my-10" 
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="6">
            <v-img
              :src="product.img"
              max-height="450"
              max-width="460"
            >
            </v-img>
          </v-col>
          <v-col cols="12" sm="6" class="secondary--text text--darken-2">
            <h2 class="product-title font-weight-bold">
              {{ product.name }}
            </h2>
            <p class="price my-4 primary--text headline font-weight-bold">
              &#8358; <span>{{ product.price }}</span>
            </p>
            <p class="mini-desc my-6 pb-0">
              {{ product.desc }} 
            </p>
            <div class="quantity">
              <v-row align="center">
                <v-col cols="2" sm="3" md="2">
                  <div 
                    class="font-weight-bold"
                    style="margin-top: -25px"
                  >
                    Quantity:
                  </div>
                </v-col>
                <v-col cols="2" sm="3" md="2">
                  <v-text-field
                    type="number"
                    filled
                    min="1"
                    v-model="quantity"
                    style="width: 60px;"
                    dense
                    class="float-right"
                    value="1" />
                </v-col>
                <v-col cols="auto">
                  <v-btn
                    color="primary"
                    dark
                    large
                    style="margin-top: -25px"
                    @click="cartAdd"
                  >
                    <v-icon left>mdi-shopping</v-icon>
                    Add to Cart
                  </v-btn>
                </v-col>
              </v-row>
            </div>
            <v-divider></v-divider>
            <div>
              <v-row>
                <v-col cols="3" sm="4" md="3">SKU:</v-col>
                <v-col cols="3" sm="5" md="3">N/A</v-col>
                <v-col cols="auto"></v-col>
              </v-row>
              <v-row>
                <v-col cols="3" sm="4" md="3">Category:</v-col>
                <v-col cols="3" sm="5" md="3">
                  {{ product.category }}
                </v-col>
                <v-col cols="auto"></v-col>
              </v-row>
              <v-row>
                <v-col cols="3" sm="4" md="3">Availability:</v-col>
                <v-col cols="3" sm="5" md="3">
                  <v-chip label dark color="success">In Stock</v-chip>
                </v-col>
                <v-col cols="auto"></v-col>
              </v-row>
              <v-row>
                <v-col cols="3" sm="4" md="3">Tags:</v-col>
                <v-col cols="9" sm="8" md="9">
                  <v-chip label small>Home</v-chip>
                  <v-chip label small>Electronics</v-chip>
                  <v-chip label small>Lamp</v-chip>
                  <v-chip label small>Office</v-chip>
                </v-col>
              </v-row>
            </div>
            <v-divider></v-divider>
            <div class="vendor">
              <v-row>
                <v-col cols="4">
                  <v-img
                  height="120"
                  width="120"
                  src="/img/cropped-vendor.png"
                  ></v-img>
                </v-col>
                <v-col cols="8">
                  <h2 class="headline">Antique Shop</h2>
                  <p class="py-1">
                    <v-row>
                      <v-col cols="1" class="my-1 py-0">
                        <v-icon small>mdi-map-marker</v-icon>
                      </v-col>
                      <v-col class="my-1 py-0">
                        258 Brighton Ave, East Orange, New Jersey, United States (US)
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="1" class="my-1 py-0">
                        <v-icon small>mdi-phone</v-icon>
                      </v-col>
                      <v-col class="my-1 py-0">
                        +234 800 008 123
                      </v-col>
                    </v-row>
                  </p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pb-0">
            <v-expansion-panels focusable>
              <v-expansion-panel expand>
                <v-expansion-panel-header color="primary" class="white--text">
                  Description
                  <template v-slot:actions>
                    <v-icon color="grey lighten-4">mdi-menu-down</v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="py-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Est blanditiis dolorem culpa incidunt minus dignissimos deserunt 
                    repellat aperiam quasi sunt. Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos 
                    deserunt repellat aperiam quasi sunt. Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos 
                    deserunt repellat aperiam quasi sunt.
                  </p>
                  <div>
                    <h3 class="text-uppercase subtitle-1 font-weight-medium">
                      Key Features
                    </h3>
                    <v-list-item v-for="x in 5" :key="x">
                      <v-list-item-icon>
                        <v-icon>mdi-menu-right</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          Est blanditiis dolorem culpa
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col cols="12" class="pt-1">
            <v-expansion-panels>
              <v-expansion-panel expand>
                <v-expansion-panel-header color="primary" class="white--text">
                  Shipping
                  <template v-slot:actions>
                    <v-icon color="grey lighten-4">mdi-menu-down</v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="py-5">
                    Shipping details...
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>

        <!-- Related Products -->
        <v-row>
          <v-col cols="12">
            <h3 class="headline text-uppercase py-5 font-weight-medium">
              Related Products
            </h3>
            <v-sheet class="mx-auto">
              <v-slide-group show-arrows>
                <v-slide-item
                  v-for="n in 10"
                  :key="n"
                >
                <v-card 
                  class="mx-2"
                  height="200"
                  width="150"
                >
                  <v-card-text>
                    Product {{ n }}
                  </v-card-text>
                </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
   components: {
    Page: () => import('~/components/PageTitle')
  },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      links: ["Home", "Products"]
    }
  },
  computed: {
    ...mapState(['productData']),
    product() {
      return this.productData.find(el => el.id === this.id)
    }
  },
  methods: {
    cartAdd () {
      let item = this.product;
      item.quantity = this.quantity;
      this.$store.commit('addToCart', item)
    }
  }
}
</script>

<style>
.product-title {
  font-size: 32px;
}

</style>