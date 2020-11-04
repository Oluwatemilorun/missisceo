<template>
  <div>
    <PageTitle title="blog" />

    <v-container>
      <v-divider />
      <v-toolbar dense flat class="d-flex justify-center">
        <v-toolbar-items v-if="!isMobile">
          <v-btn
            v-for="(item, index) in categories"
            :key="index"
            text
            class="text-capitalize"
          >
            {{ item }}
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
          <v-menu offset-y rounded="lg">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text class="text-capitalize" v-bind="attrs" v-on="on">
                All categories
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in categories"
                :key="index"
                link
              >
                <v-list-item-title v-text="item" />
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-toolbar>
      <v-divider />
    </v-container>

    <!-- Blog Posts -->
    <div class="mt-5 latest">
      <v-sheet class="mb-5">
        <v-container>
          <v-row justify="center" align="center">
            <v-col
              v-for="(item, i) in articles.slice(2, 4)"
              :key="i"
              cols="12"
              sm="8"
              md="6"
              lg="5"
            >
              <v-card flat tile class="mb-sm-10" :to="`/blog/${item.slug}`">
                <v-img :src="item.hero" height="450" class="item-hero pt-10">
                  <span class="grey py-2 px-4 subtitle-2">
                    {{ item.date }}
                  </span>
                  <v-sheet
                    tile
                    color="rgba(255,255,255,0.8)"
                    class="px-2 py-5 item-title"
                  >
                    <div
                      class="text-center headline font-weight-bold text-capitalize"
                    >
                      {{ item.title }}
                    </div>
                  </v-sheet>
                  <template v-slot:placeholder>
                    <v-row align="center" justify="center" class="fill-height">
                      <v-progress-circular indeterminate color="primary">
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </div>

    <!-- Older Posts -->
    <Heading title="older posts" />
    <v-sheet class="mb-5">
      <v-container>
        <v-row justify="center" align="center">
          <v-col v-for="(post, i) in articles" :key="i" cols="6" sm="6" md="4">
            <v-card flat tile :to="`/blog/${post.slug}`">
              <v-img :src="post.hero" class="d-flex align-end" height="300">
                <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2">
                  <div
                    class="title font-weight-bold text-capitalize text-center my-2"
                  >
                    {{ post.title }}
                  </div>
                </v-sheet>
                <template #placeholder>
                  <v-row align="center" justify="center" class="fill-height">
                    <v-progress-circular indeterminate color="primary" />
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-pagination
              :length="12"
              :value="2"
              :total-visible="7"
              class="my-7 py-2 pagination"
              color="primary--text"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Galllery -->
    <Gallery />
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.getters['blog/articles']
    },
    categories() {
      return this.$store.getters['category/categories']
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>

<style scoped>
.item-hero {
  position: relative;
}

.item-title {
  position: absolute;
  bottom: 0px;
}
</style>
