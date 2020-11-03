<template>
  <v-app dark>
    <v-row justify="center" align="center" class="text-center">
      <v-col cols="12" class="my-10">
        <div
          v-if="error.statusCode === 404"
          class="display-4 font-weight-black"
        >
          {{ pageNotFound }}
        </div>
        <div v-else class="display-4 font-weight-black">
          {{ otherError }}
        </div>
        <v-btn color="primary" x-large class="my-10" to="/" depressed>
          Back to Homepage
        </v-btn>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
