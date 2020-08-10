<template>
  <v-app id="app" class="app">
    <Header />
    <v-main>
      <nuxt />
    </v-main>
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