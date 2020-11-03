<template>
  <v-footer id="footer" dark padless>
    <v-sheet color="rgb(51,64,89)" flat width="100%" tile class="mt-0">
      <v-container class="pb-0">
        <v-row justify="center">
          <v-col cols="12" sm="10" md="6">
            <div
              class="py-3 px-5"
              style="cursor: pointer"
              @click="$router.push('/')"
            >
              <span class="headline text-uppercase font-weight-black">
                Missisceo
              </span>
            </div>
            <div class="mx-1">
              <v-list color="transparent" class="tertiary--text" flat>
                <v-list-item
                  v-for="(link, n) in links.slice(1)"
                  :key="n"
                  :to="link.href"
                  class="subtitle-1 text-capitalize py-1 my-1"
                >
                  {{ link.text }}
                </v-list-item>
                <v-list-item
                  v-for="(category, g) in categories"
                  :key="g"
                  class="subtitle-1 text-capitalize py-1 my-1"
                  link
                >
                  {{ category }}
                </v-list-item>
              </v-list>
            </div>
          </v-col>
          <v-col id="subscribe" cols="12" sm="10" md="6" class="my-0 py-0">
            <v-row>
              <v-col cols="12" class="pa-5 pb-0">
                <div class="subtitle-1 text-uppercase font-weight-medium">
                  Subscribe to my newsletter to get outfit inspiration and
                  beauty tips!
                </div>
              </v-col>
              <v-col cols="12" class="px-5">
                <v-row>
                  <v-col cols="8" sm="7" md="8" xl="7">
                    <v-text-field outlined dense placeholder="Email Address" />
                  </v-col>
                  <v-col cols="4" sm="5" md="4" xl="5">
                    <v-btn light depressed color="grey lighten-3">
                      Submit
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet tile flat width="100%">
      <v-sheet color="secondary darken-4 text--grey" tile class="pa-5 pb-2">
        <v-row justify="center">
          <v-col cols="12" sm="6" class="text-center text-sm-left">
            <span class="subtitle-2">
              &copy; {{ new Date().getFullYear() }}
              <span class="pl-1">MissisCEO</span>
            </span>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0 text-center text-sm-right">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mr-1"
              icon
              tile
              small
              color="tertiary"
            >
              <v-icon size="20px">{{ icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-sheet>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-whatsapp',
      'mdi-youtube',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
  computed: {
    links() {
      return this.$store.getters.links
    },
    categories() {
      return this.$store.getters['category/categories']
    },
  },
}
</script>

<style scoped>
#footer .v-list .v-list-item {
  display: inline-block;
  min-height: 18px;
  font-size: 15px;
}
#footer #subscribe .v-size--default {
  height: 40px !important;
}
</style>
