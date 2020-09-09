<template>
  <v-app id="app" class="app">
    <Header />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "~/components/core/Header";
import Footer from "~/components/core/Footer";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body, .v-application, #app, .app {
  font-family: 'Poppins', sans-serif
}

h1, h2, h3, h4, h5, h6, .caption, .headline{
  font-family: 'Gotu', sans-serif
}

a {
  text-decoration: none;
}

.v-app-bar--fixed.v-app-bar--hide-shadow.white > .v-toolbar__content {
  border-bottom: 1px solid rgba(0,0,0,0.12);
}

.pagination {
  border-top: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
}
.pagination .v-pagination__item, .pagination .v-pagination__navigation {
  border-radius: 0;
  box-shadow: none;
  background: transparent!important;
}
.pagination .v-pagination__item--active {
  background: transparent!important;
}
</style>