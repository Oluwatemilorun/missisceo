<template>
  <div>
    <div style="border-bottom: 1px solid #eee; margin-top:85px">
      <v-app-bar
        app
        height="85"
        color="white"
        elevate-on-scroll
        tile
        class="px-md-10"
      >
        <!-- Mobile -->
        <v-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
          color="secondary"
          large
        >mdi-menu</v-icon>

        <v-spacer class="hidden-md-and-up"></v-spacer>
        <span 
          @click="$router.push('/')" 
          class="secondary--text ml-lg-10"
          style="cursor: pointer"
        >
          <h1 class="font-weight-bold logo text-uppercase">
            Missisceo
          </h1>
        </span>

        <v-spacer />
        <div class="hidden-sm-and-down mr-5">
          <v-btn
            v-for="(link, i) in links.slice(1,)"
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
        <span class="mr-lg-10"></span>
      </v-app-bar>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      app
      light
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.href"
        >
          <v-list-item-title v-text="link.text" />
        </v-list-item>
        <div class="ma-3">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mr-1"
            icon
            tile
            color="secondary"
          >
            <v-icon small>{{ icon }}</v-icon>
          </v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    ...mapGetters(['links']),
  }
}
</script>
<style scoped>
h1.logo {
  font-size: 32px;
}
</style>