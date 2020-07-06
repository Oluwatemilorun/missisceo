<template>
  <div id="home">
    <!-- Intro -->
    <v-sheet tile color="secondary">
      <v-parallax
        src="/img/blurcamera.jpg"
        dark
        height="350"
        jumbotron
      >
        <v-container>
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" class="text-center">
              <h1 class="my-5">Welcome to MissisCEO Events & Beauty Blog/Shop</h1>
              <h4>There is no one who loves pain itself, who seeks after it 
                and wants to have it, simply because it is pain...
              </h4>
              <v-btn large class="my-5" outlined color="primary">
                Read More
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </v-sheet>

    <!-- Blog Posts -->
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
    <v-pagination 
      :length="page.length" 
      v-model="page.num"
      total-visible="7"
      color="primary"
      class="my-5"
    >
    </v-pagination>
  </div>
</template>

<script>
export default {
  components: {
    BlogPost: () => import('~/components/BlogPostCard')
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
      title: 'Home'
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
