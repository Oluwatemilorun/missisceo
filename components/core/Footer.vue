<template>
  <v-footer dark padless class="footer">
    <!-- Info section -->
    <v-sheet tile color="rgb(62,72,95)" class="my-0" width="100%">
      <v-container>
        <v-row>
          <v-col cols="12" sm="5" md="6" class="pa-5">
            <h2 class="text-uppercase font-weight-medium">
              Subscribe to my newsletter to get outfit inspiration and beauty tips!
            </h2>
          </v-col>
          <v-col cols="12" sm="7" md="6" class="px-5">
            <v-row>
              <v-col cols="7">
                <v-text-field
                  v-model="email"
                  outlined
                  dense
                  label="Email Address"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-btn light color="grey lighten-3">
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet> <!-- Info Section ends -->
    <v-sheet color="secondary darken-4" width="100%" tile>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-list color="rgba(0,0,0,0)" flat>
              <v-list-item 
                dense 
                v-for="(link, n) in links" :key="n" 
                :to="link.href"
              >
                <v-list-item-title >
                  {{ link.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="8" class="my-0 py-0">
            <v-row>
              <v-col cols="4" sm="3" lg="2" v-for="n in 12" class="d-flex child-flex" :key="n">
                <v-img src="/img/sunset.jpg">
                  <template v-slot:placeholder>
                    <v-row align="center" justify="center" class="fill-height">
                      <v-progress-circular indeterminate color="primary">
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <hr />
    <v-sheet tile flat width="100%">
      <v-sheet color="secondary darken-4 text--grey" tile class="pa-5 pb-2">
        <v-row justify="center">
          <v-col cols="12" sm="6" class="text-center text-sm-left">
            &copy; {{ new Date().getFullYear() }} —
            <strong class="pr-1">
              <span class="primary--text">MissisCEO</span>.
            </strong> All rights reserved.
          </v-col>
          <v-col cols="12" sm="6" class="pa-0 text-center text-sm-right">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mr-1"
              icon
              tile
              color="primary"
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
    email: '',
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-youtube',
      'mdi-linkedin',
      'mdi-instagram'
    ],
  }),
  computed: {
    links() {
      return this.$store.getters.links;
    }
  }
};
</script>

<style>

</style>
