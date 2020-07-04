<template>
  <v-btn
    fab
    dark
    fixed
    bottom
    small
    right
    color="grey darken-4" 
    @click="toTop"
    class="mb-10"
  >
    <v-icon dark large color="primary">mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||
      e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop(){
      this.$vuetify.goTo(0)
    }
  }
}
</script>
