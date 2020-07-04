<template>
  <v-app class="app">
    <Header />
    <Drawer />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
    <back-to-top />
  </v-app>
</template>

<script>
export default {
  components: {
    Header: () => import('~/components/core/Header'),
    Drawer: () => import('@/components/core/Drawer'),
    Footer: () => import('~/components/core/Footer'),
    backToTop: () => import('~/components/core/BackToTop')
  }
}
</script>
<style>
.v-application, .app {
  font-family: 'Raleway', sans-serif
}
a {
  text-decoration: none;
}
::selection {
  background: #FFECB3;
  color: #263238
}
</style>