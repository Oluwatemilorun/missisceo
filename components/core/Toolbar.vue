<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary floating>
      <v-list nav>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.href"
          class="text-capitalize"
          active-class="primary--text"
        >
          <v-list-item-title v-text="link.text" />
        </v-list-item>
      </v-list>
      <div class="pa-3">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mr-1"
          icon
          tile
          small
          color="secondary"
        >
          <v-icon small>{{ icon }}</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-app-bar
      app
      height="80"
      color="white"
      elevate-on-scroll
      tile
      class="px-lg-10"
    >
      <v-app-bar-nav-icon
        color="secondary"
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />

      <v-spacer class="hidden-md-and-up" />

      <v-toolbar-title
        class="font-weight-bold display-1 text-uppercase"
        style="cursor: pointer"
        @click="$router.push('/')"
      >
        Missisceo
      </v-toolbar-title>

      <v-spacer />

      <div class="hidden-sm-and-down mr-5">
        <v-btn
          v-for="(link, i) in links.slice(1)"
          :key="i"
          v-bind="link"
          class="mx-2 font-weight-bold"
          text
          small
          :to="link.href"
        >
          {{ link.text }}
        </v-btn>
      </div>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mr-1 hidden-sm-and-down"
        icon
        tile
        small
        color="secondary"
      >
        <v-icon small>{{ icon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram',
      'mdi-youtube',
      'mdi-pinterest',
    ],
  }),
  computed: {
    links() {
      return this.$store.getters.links
    },
  },
}
</script>
