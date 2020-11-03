<template>
  <div>
    <v-sheet height="500" color="grey lighten-4" tile>
      <v-parallax src="/img/books.png" />
    </v-sheet>

    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-row>
            <v-col v-for="post in posts" :key="post.title" cols="12" sm="6">
              <v-card flat tile class="pa-5">
                <v-card flat :to="`/blog/${post.slug}`">
                  <v-img
                    :src="post.hero"
                    class="rounded"
                    :aspect-ratio="16 / 9"
                  >
                    <template #placeholder>
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <v-progress-circular color="primary" indeterminate />
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
                <v-card-text class="text--primary">
                  <div class="headline font-weight-medium">
                    {{ post.title }}
                  </div>
                  <div class="subtitle-1 py-2">
                    {{ post.body.slice(0, 200) }}[...]
                  </div>
                  <div class="py-2 d-flex">
                    <v-btn
                      depressed
                      color="primary"
                      class="text-capitalize"
                      :to="`/blog/${post.slug}`"
                    >
                      Read more
                    </v-btn>
                    <v-spacer />
                    <v-btn icon color="blue darken-3">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon color="blue lighten-2">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-pagination
                :length="12"
                :value="2"
                :total-visible="7"
                class="py-2 pagination"
                color="primary--text"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <Gallery />
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters['blog/articles']
    },
  },
}
</script>
