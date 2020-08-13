<template>
  <div id="home">
    <!-- Intro -->
    <v-sheet tile flat color="grey lighten-3" max-height="400" class="">
      <v-parallax
        src="/img/books.png"
        dark
        height="350"
      >
      </v-parallax>
    </v-sheet>

    <!-- Blog Posts -->
    <v-container>
      <v-row justify="center">
        <!-- Mobile -->
        <v-col cols="12" sm="10" class="hidden-md-and-up" id="mobile">
          <v-container fluid class="py-0 articles">
            <v-row 
              justify="center" 
              class="box" 
              v-for="(article, a) in articles.slice(0,6)" 
              :key="a"
            >
              <v-col cols="6" class="post-img px-1">
                <v-card 
                  flat 
                  tile 
                  height="100%" 
                  color="grey lighten-4"
                  :to="`/blog/${article.slug}`"
                >
                  <v-img :src="article.hero" height="100%">
                    <v-sheet 
                      color="rgba(255,255,255,0.8)"
                      tile 
                      class="item-date d-inline-block py-2 px-4"
                    >
                      {{ article.date }} 
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
              <v-col cols="6" class="post px-1" style="direction: ltr">
                <v-card class="pa-3 pr-1">
                  <h2 class="text-capitalize">{{ article.title }}</h2>
                  <p class="pt-2 pb-0">
                    {{ article.body.slice(0,150) }}[<b class="primary--text">...</b>]
                  </p>
                  <div>
                    <v-btn 
                      color="primary"
                      depressed
                      small
                      class="mr-5"
                      :to="`/blog/${article.slug}`"
                    >
                      Read More
                    </v-btn>
                    <v-btn 
                      icon 
                      color="accent darken-1"
                      small
                    >
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn 
                      icon 
                      color="accent lighten-1"
                      small
                    >
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <!-- Desktop -->
        <v-col md="12" lg="9" class="hidden-sm-and-down pt-10" id="desktop">
          <v-container fluid class="articles">
            <v-row 
              justify="center" 
              v-for="(post, p) in articles.slice(0, 6)" 
              :key="p" 
              class="py-10 mb-10 box"
            >
              <v-col cols="2" class="pa-0 ">
                <v-sheet tile color="primary" height="100%"></v-sheet>
              </v-col>
              <v-col cols="5" class="pa-0 post-img">
                <v-card 
                  flat 
                  tile 
                  height="90%" 
                  color="grey lighten-4"
                  :to="`/blog/${post.slug}`"
                >
                  <v-img :src="post.hero" height="100%">
                    <v-sheet 
                      color="rgba(255,255,255,0.8)"
                      tile 
                      class="item-date d-inline-block py-2 px-4"
                    >
                      {{ post.date }} 
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
              <v-col cols="5" class="pa-0 post">
                <v-card class="pa-5">
                  <h2 class="text-capitalize">{{ post.title }}</h2>
                  <p class="pt-2 pb-0">
                    {{ post.body.slice(0,350) }}[<b class="primary--text">...</b>]
                  </p>
                  <div>
                    <v-btn 
                      color="primary"
                      depressed
                      :to="`/blog/${post.slug}`"
                      class="mr-10"
                    >
                      Read More
                    </v-btn>
                    <v-btn 
                      icon 
                      color="accent darken-1"
                    >
                      <v-icon large>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn 
                      icon 
                      color="accent lighten-1"
                      class="mx-2"
                    >
                      <v-icon large>mdi-twitter</v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

    </v-container>
    
    <!-- Gallery -->
    <Gallery />

  </div>
</template>

<script>
import Gallery from "~/components/Gallery";

export default {
  components: {
    Gallery
  },
  computed: {
    articles() {
      return this.$store.getters['blog/articles']
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
.articles .post-img, .post {
  direction: ltr;
}
.articles .item-date {
  position: absolute;
  top: 20px;
  font-size: 14px;
}
.articles .box:nth-child(even) .item-date {
  right: 0px;
}

#mobile .articles .box:nth-child(even) {
  direction: rtl
}
#mobile .articles .post h2 {
  font-size: 18px
}

#desktop .articles .post-img {
   margin-left: -75px; margin-top: -50px
}
#desktop .articles .post {
  margin-left: -50px
}
#desktop .articles .box:nth-child(even) {
  direction: rtl
}
#desktop .articles .box:nth-child(even) .post {
  margin: 0;
  margin-right: -50px
}
#desktop .articles .box:nth-child(even) .post-img {
  margin: 0;
  margin-right: -75px;
  margin-top: -50px
}
</style>
