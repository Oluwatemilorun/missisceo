<template>
  <v-sheet tile light>
    <v-container>
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" class="text-center mt-3">
          <h2 class="page-title">{{ title }}</h2>
        </v-col>
      </v-row>
    </v-container>
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

<style>
h2.page-title {
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 500;
}
</style>