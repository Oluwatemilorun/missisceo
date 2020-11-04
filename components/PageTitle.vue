<template>
  <v-container>
    <v-row align="center" justify="center" class="fill-height">
      <div class="headline text-capitalize font-weight-bold">
        {{ title }}
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: 'Page',
    },
  },
}
</script>
