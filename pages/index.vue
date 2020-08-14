<template>
  <div id="home">
    <!-- Intro -->
    <v-sheet tile flat color="grey lighten-3" max-height="400" class="">
      <v-parallax src="/img/books.png" dark height="350">
      </v-parallax>
    </v-sheet>

    <!-- Blog Posts -->
    <v-container>
      <v-row justify="center">
        <!-- Mobile Blogpost Card -->
        <v-col cols="12" sm="10" class="hidden-md-and-up" id="mobile">
          <v-container fluid class="py-0 articles">
            <Mobile 
              :article="article" 
              v-for="(article, a) in articles.slice(0,6)" 
              :key="a"
            />
          </v-container>
        </v-col>
        <!-- Desktop Blogpost Card -->
        <v-col md="12" lg="9" class="hidden-sm-and-down" id="desktop">
          <v-container fluid class="articles">
            <Desktop 
              :post="article" 
              v-for="(article, r) in articles.slice(0,6)" 
              :key="r"
            />
          </v-container>
        </v-col>
        <!-- Pagination - all screens -->
        <v-col cols="12" sm="10" md="12" lg="9">
          <v-pagination 
            :length="12" 
            :value="2"
            total-visible="7"
            circle
            class="py-2 pagination"
            color="primary--text"
          >
          </v-pagination>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Gallery -->
    <Gallery />

  </div>
</template>

<script>
import Gallery from "~/components/Gallery";
import Mobile from "~/components/BlogCardMobile";
import Desktop from "~/components/BlogCardDesktop";

export default {
  components: {
    Gallery, 
    Mobile,
    Desktop
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

<style>
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

@media screen and (min-width: 560px) {
  #mobile .articles .post h2 {
    font-size: 20px;
  }
  #mobile .articles .post-text {
    font-size: 18px;
  }
}
@media screen and (min-width: 600px) {
  #mobile .articles .post h2 {
    font-size: 18px;
  }
  #mobile .articles .post-text {
    font-size: 16px;
  }
}
@media screen and (min-width: 650px) {
  #mobile .articles .post h2 {
    font-size: 20px;
  }
  #mobile .articles .post-text {
    font-size: 17px;
  }
}
@media screen and (min-width: 700px) {
  #mobile .articles .post h2 {
    font-size: 22px;
  }
  #mobile .articles .post-text {
    font-size: 18px;
  }
}
@media screen and (min-width: 840px) {
  #mobile .articles .post h2 {
    font-size: 26px;
  }
  #mobile .articles .post-text {
    font-size: 18px;
  }
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
