<template>
  <v-app id="app">
    <Toolbar />

    <v-main>
      <nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.v-application,
#app,
.app {
  font-family: 'Proxima Nova', sans-serif;
}

/* Vuetify typography helper classes font-family */
.v-application .display-4,
.v-application .display-3,
.v-application .display-2,
.v-application .display-1,
.v-application .text-lg-h4,
.v-application .text-lg-h6,
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .body-1,
.v-application .body-2,
.v-application .caption {
  font-family: 'Proxima Nova', sans-serif !important;
}

a {
  text-decoration: none;
}

.v-app-bar--fixed.v-app-bar--hide-shadow.white > .v-toolbar__content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.pagination {
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}
.pagination .v-pagination__item,
.pagination .v-pagination__navigation {
  border-radius: 0;
  box-shadow: none;
  background: transparent !important;
}
.pagination .v-pagination__item--active {
  background: transparent !important;
}
</style>
