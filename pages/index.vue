<template>
  <div>
    <v-sheet tile color="grey lighten-4" height="560">
      <v-parallax dark src="/img/books-2.png" height="560">
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <!--  -->
          </v-col>
        </v-row>
      </v-parallax>
    </v-sheet>

    <v-container>
      <v-row justify="center">
        <v-col id="articles" cols="12" class="">
          <v-row v-if="isMobile">
            <v-col v-for="post in posts" :key="post.title" cols="12" sm="6">
              <v-card flat tile class="pa-5">
                <v-card flat :to="`/blog/${post.slug}`">
                  <v-img
                    :src="post.hero"
                    class="rounded"
                    :aspect-ratio="16 / 9"
                  >
                    <span class="grey pa-2 caption font-weight-medium">
                      {{ post.date }}
                    </span>
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
                </v-card-text>
                <v-card-actions>
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
                </v-card-actions>
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
          <template v-else>
            <v-row
              v-for="post in posts.slice(0, 8)"
              :key="post.title"
              justify="center"
              class="py-10 mt-10 box"
            >
              <v-col cols="1" class="pa-0">
                <v-sheet tile color="primary" height="460" />
              </v-col>
              <v-col cols="5" class="pa-0 post-img">
                <v-card
                  flat
                  tile
                  height="460"
                  color="grey lighten-4"
                  :to="`/blog/${post.slug}`"
                >
                  <v-img :src="post.hero" height="100%">
                    <span class="grey post-date pa-2 subtitle-2">
                      {{ post.date }}
                    </span>
                    <template v-slot:placeholder>
                      <v-row
                        align="center"
                        justify="center"
                        class="fill-height"
                      >
                        <v-progress-circular indeterminate color="primary" />
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="6" class="pa-0 post">
                <v-card height="460" class="pa-5">
                  <v-card-title class="headline text-lg-h4 font-weight-bold">
                    {{ post.title }}
                  </v-card-title>
                  <v-card-text
                    class="text--primary subtitle-1 text-lg-h6 font-weight-regular"
                  >
                    <template v-if="isXtraLarge">
                      {{ post.body.slice(0, 500) }}[...]
                    </template>
                    <template v-else>
                      {{ post.body.slice(0, 320) }}[...]
                    </template>
                  </v-card-text>
                  <v-card-actions>
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
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
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
          </template>
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
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    isXtraLarge() {
      return !this.$vuetify.breakpoint.lgAndDown
    },
  },
}
</script>

<style>
#articles .post-img,
.post {
  direction: ltr;
}

#articles .post-date {
  position: absolute;
  top: 20px;
}
#articles .box:nth-child(even) .post-date {
  right: 0px;
}

#articles .box:nth-child(even) {
  direction: rtl;
}

#articles .post-img {
  margin-left: -45px;
  margin-top: -50px;
}
#articles .box:nth-child(even) .post-img {
  margin: 0;
  margin-right: -45px;
  margin-top: -50px;
}

#articles .post {
  margin-left: -75px;
}
#articles .box:nth-child(even) .post {
  margin: 0;
  margin-right: -75px;
}
</style>
