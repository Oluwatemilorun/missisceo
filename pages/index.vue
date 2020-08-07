<template>
  <div id="home">
    <!-- Intro -->
    <v-sheet tile flat color="grey lighten-3" max-height="400" class="pa-0 ma-0 mb-10">
      <v-parallax
        src="/img/books.png"
        dark
        height="300"
      >
      </v-parallax>
    </v-sheet>

    <!-- Blog Posts -->
    <v-sheet class="articles">
      <v-row no-gutters align="center" >
        <v-col 
          cols="12" md="10" 
          v-for="(blogpost, i) in articles.slice(0,6)" :key="i" 
          class="d-flex full-box justify-center"
        >
           <div>
            <v-sheet 
              class="pillar-box ma-10 mt-0 pl-10 ml-lg-1"
              tile 
            >
              <v-sheet 
                class="img-box"
                tile
              >
                <v-card height="100%" color="transparent" tile flat :to="`blog/${blogpost.slug}`">
                  <v-img :src="blogpost.hero" width="100%" height="100%" class="py-5">
                    <span color="grey lighten-2" class="date mx-0 pa-2">
                      {{ blogpost.date }}
                    </span>
                  </v-img>
                </v-card>
              </v-sheet>
              <div class="post-box">
                <v-card 
                  width="100%" 
                  height="100%"
                  class="pa-3 pa-md-5 post-card"
                  elevation="2"
                >
                  <h1 class="post-title">
                    {{ blogpost.title }}
                  </h1>
                  <!-- mobile -->
                  <p class="post-text my-1 my-sm-3 hidden-md-and-up">
                    {{ blogpost.body.slice(0,200) }}[<b class="primary--text">...</b>]
                  </p>
                  <!-- desktop -->
                  <p class="post-text my-3 hidden-sm-and-down">
                    {{ blogpost.body.slice(0,500) }}[<b class="primary--text">...</b>]
                  </p> 
                  <p class="post-actions my-2 my-sm-5">
                    <v-btn 
                      color="primary"  
                      small
                      depressed
                      dark
                      :to="`/blog/${blogpost.slug}`"
                      class="hidden-md-and-up"
                    >
                      Read More
                    </v-btn>
                    <v-btn 
                      color="primary"  
                      depressed
                      dark
                      :to="`/blog/${blogpost.slug}`"
                      class="hidden-sm-and-down"
                    >
                      Read More
                    </v-btn>
                    <span class="ml-5"> 
                      <v-btn 
                        color="accent lighten-1"  
                        dark
                        small
                        icon
                      >
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn 
                        color="accent darken-1"  
                        dark
                        small
                        icon
                      >
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                    </span>
                  </p>
                </v-card>
              </div>
            </v-sheet>
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-sheet>
    <v-pagination 
      :length="page.length" 
      v-model="page.num"
      total-visible="7"
      color="primary--text"
      class="mb-10 pagination py-2"
    >
    </v-pagination>

    <!-- Gallery -->
    <Gallery />

  </div>
</template>

<script>
export default {
  components: {
    Gallery: () => import('~/components/Gallery')
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
.pillar-box {
  position: relative;
  z-index: 1;
  width: 0;
  height: 350px;
}
.img-box {
  position: absolute;
  z-index: 2;
  width: 210px;
  height: 350px;
}
.post-box {
  position: absolute;
  z-index: 3;
  width: 250px;
  height: 350px;
  top: 0;
}
span.date {
  font-size: 13px;
  background: #ECEFF1;
  color: black;
  margin-top: 150px;
}
h1.post-title {
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
}
.post-details {
  font-size: 12px;
  text-transform: uppercase;
}

.full-box {
  padding-top: 5px;
}

div.articles .full-box:nth-child(even) .img-box {
  right: -25px;
  text-align: right;
}

div.articles .full-box:nth-child(odd) .img-box {
  left: -25px;
}
div.articles .full-box:nth-child(odd) .post-box {
  left: 480%;
}

div.articles .full-box:nth-child(even) .post-box {
  right: 480%;
}

div.articles .full-box:nth-child(odd) {
  padding-right: 375px;
}

div.articles .full-box:nth-child(even) {
  padding-left: 375px;
}

@media screen and (min-width: 600px) {
  h1.post-title {
    font-size: 20px;
  }

  .img-box {
    width: 280px;
  }

  .post-box {
    width: 280px;
  }
  
  div.articles .full-box:nth-child(even) .img-box {
    right: -75px;
    text-align: right;
  }

  div.articles .full-box:nth-child(odd) .img-box {
    left: -75px;
  }
  div.articles .full-box:nth-child(odd) .post-box {
    left: 525%;
  }

  div.articles .full-box:nth-child(even) .post-box {
    right: 525%;
  }  
}

@media screen and (min-width: 960px) {
  .pillar-box {
    left: -50px;
    width: 125px;
    height: 450px;
    background-color: goldenrod;
  }
  .post-box {
    width: 400px;
    height: 450px;
  }
  .img-box {
    top: -50px;
    width: 350px;
    height: 450px;
  }
  
  h1.post-title {
    font-size: 24px;
  }
  
  .full-box {
    margin-top: 60px;
  }

  div.articles .full-box:nth-child(even) .img-box {
    right: 50%;
    text-align: right;
  }

  div.articles .full-box:nth-child(odd) .img-box {
    left: 50%;
  }
  div.articles .full-box:nth-child(odd) .post-box {
    left: 275%;
  }
  div.articles .full-box:nth-child(even) .post-box {
    right: 275%;
  }
  div.articles .full-box:nth-child(even) {
    padding-left: 900px;
  }
  div.articles .full-box:nth-child(odd) {
    padding-right: 325px;
  }
}
</style>
