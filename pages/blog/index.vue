<template>
  <div id="home">
    <!-- Page Header -->
    <Page title="blog" />

    <!-- Blog Posts -->
    <div class="mt-5">
      <heading title="Latest posts" />
      <v-sheet class="mt-5 pl-md-10">
        <v-row no-gutters align="center" justify="center">
          <v-col 
            cols="12" md="6" 
            v-for="(post, i) in articles.slice(0,6)" :key="i" 
            class="d-flex full-box mb-5 justify-center"
          >
            <BlogPost :blogpost="post" />
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-sheet>
    </div>

    <!-- Older Posts -->
    <heading title="older posts" />
    <v-sheet class="mb-5">
      <v-container>
        <v-row justify="center" align="center">
          <v-col 
            cols="6" sm="6" md="4" lg="3" 
            v-for="(item, i) in articles" :key="i"
          >
            <v-card elevation="5">
              <a :href="`/blog/${item.slug}`">
                <v-img
                  :src="item.hero"
                  class="d-flex align-end"
                >
                  <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2">
                    <h3 class="text-capitalize text-center my-">
                      {{ item.title }} 
                    </h3>
                  </v-sheet>
                  <template v-slot:placeholder>
                    <v-row align="center" justify="center" class="fill-height">
                      <v-progress-circular indeterminate color="primary">
                      </v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </a>
            </v-card>
          </v-col>
        </v-row>
        <v-pagination 
          :length="page.length" 
          v-model="page.num"
          total-visible="7"
          dark
          class="my-7"
        >
        </v-pagination>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  components: {
    Page: () => import('~/components/PageTitle'),
    BlogPost: () => import('~/components/home/BlogPostCard'),
    heading: () => import('~/components/heading')
  },
  data() {
    return {
      page: { num: 2, length: 12 },
    };
  },
  computed: {
    articles() {
      return this.$store.getters.articles
    }
  },
  head() {
    return {
      title: 'Blog'
    };
  }
};
</script>

<style scoped>
.full-box {
  border-bottom: 2px solid #ECEFF1;
  padding-right: 400px;
  padding-top: 25px;
}

@media screen and (min-width: 600px) {
  .full-box {
    padding-right: 450px;
  }
}
</style>
