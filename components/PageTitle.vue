<template>
  <v-sheet tile dark color="secondary">
    <v-img 
      src="/img/banner1.jpg" 
      height="120"
      gradient="to top right, rgba(0,0,0,.2), rgba(0,0,0,.35)"
    >
      <v-container>
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" class="text-center">
            <h1 class="mt-3 text-uppercase">{{ title }}</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Page"
    }
  }
}
</script>

<style></style>