<template>
  <div>
    <v-app-bar
      dark
      flat
      height="72"
      elevation="1"
      tile
    >
      <v-container fluid class="mx-auto py-0">
        <v-row align="center">
          <a href="/">
            <h1 class="font-weight-bold logo text-uppercase">
              Missisceo
            </h1>
          </a>

          <v-divider class="ml-3 hidden-sm-and-down" vertical></v-divider>

          <div class="d-none d-md-flex">
            <v-btn
              v-for="(link, i) in links.slice(1,)"
              :key="i"
              v-bind="link"
              class="hidden-sm-and-down"
              text
              :to="link.href"
            >
              {{ link.text }}
            </v-btn>
          </div>

          <v-spacer />

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mr-1"
            icon
            tile
            small
            color="primary"
          >
            <v-icon small>{{ icon }}</v-icon>
          </v-btn>
          <!-- Mobile -->
          <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="toggleDrawer"
        ></v-app-bar-nav-icon>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
  } from 'vuex'

export default {
  name: 'Header',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-youtube',
      'mdi-linkedin',
      'mdi-instagram'
    ],
  }),
  computed: {
      ...mapGetters(['links']),
  },
  methods: {
    ...mapMutations(['toggleDrawer']),
  },
}
</script>
<style scoped>
h1.logo {
  font-size: 20px;
}
</style>