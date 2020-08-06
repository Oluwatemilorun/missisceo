<template>
  <v-footer dark padless id="footer">
    <v-sheet color="rgb(51,64,89)" flat width="100%" tile class=" mt-0">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="6">
            <span 
              @click="$router.push('/')" 
              class="tertiary--text pa-5"
              style="cursor: pointer"
            >
              <h1 class="font-weight-bold d-inline logo text-uppercase">
                Missisceo
              </h1>
            </span>
            <div class="mx-1">
              <v-list color="transparent" class="tertiary--text" flat dense>
                <v-list-item 
                  v-for="(link, n) in links.slice(1,)" 
                  :key="n"
                  :to="link.href"
                  class="text-uppercase" 
                >
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
                <v-list-item 
                  v-for="(category, g) in categories" 
                  :key="g"
                  class="text-uppercase"
                  link 
                >
                  <v-list-item-title>{{ category }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
          <v-col cols="12" sm="10" md="6" class="my-0 py-0">
            <v-row>
              <v-col cols="12" class="pa-5">
                <h2 class="text-uppercase font-weight-medium">
                  Subscribe to my newsletter to get outfit inspiration and 
                  beauty tips!
                </h2>
              </v-col>
              <v-col cols="12" class="px-5">
                <v-row>
                  <v-col cols="7">
                    <v-text-field
                      outlined
                      dense
                      placeholder="Email Address"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5">
                    <v-btn light depressed class="py-5" color="grey lighten-3">
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
           
            <h4 class="d-inline">
              &copy; {{ new Date().getFullYear() }}
              <span class="pl-1">MissisCEO</span>
            </h4>
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
      'mdi-instagram'
    ]
  }),
  computed: {
    links() {
      return this.$store.getters.links;
    },
    categories() {
      return this.$store.getters.categories;
    }
  }
};
</script>

<style scoped>
h1.logo {
  font-size: 36px;
}
#footer .v-list .v-list-item {
  display: inline-block;
  
}
</style>
