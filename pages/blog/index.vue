<template>
  <div id="home">
    <!-- Page Header -->
    <Page title="blog" />

    <v-container>
      <v-app-bar
        flat
        class="menubar my-0 mx-10 mx-md-0 mx-lg-10"
        elevation="0"
        style="background-color: #fff"
      >
        <v-container class="mx-auto py-0">
          <v-row align="center" justify="center">

            <v-container class="text-center">
              <span 
                v-for="(category, k) in categories" 
                :key="k" 
                class="hidden-sm-and-down"
              >
                <v-btn
                  text
                >
                  {{ category }}
                </v-btn>
                <span v-show="k<categories.length-1">|</span>
              </span>
            </v-container>

            <!-- Mobile Categories Dropdown -->
            <v-menu bottom left offset-y>
              <template v-slot:activator="{ on }">
                <v-btn text v-on="on" class="hidden-md-and-up mb-6">
                  All Categories
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(catg, g) in categories" 
                  :key="g"
                  link 
                >
                  <v-list-item-title>{{ catg }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-container>
      </v-app-bar>
    </v-container>

    <!-- Blog Posts -->
    <div class="mt-5 latest">
      <v-sheet class="mb-5">
        <v-container>
          <v-row justify="center" align="center">
            <v-col 
              cols="12" sm="8" md="6" lg="5" 
              v-for="(item, i) in articles.slice(2,4)" :key="i"
            >
              <v-card 
                flat tile 
                class="mb-sm-10"
                :to="`/blog/${item.slug}`"
              >
                <v-img
                  :src="item.hero"
                  height="450"
                  class="item-hero"
                >
                  <v-sheet 
                    color="rgba(255,255,255,0.8)"
                    tile 
                    class="item-date d-inline-block py-2 px-4"
                  >
                    {{ item.date }} 
                  </v-sheet>
                  <v-sheet 
                    tile 
                    color="rgba(255,255,255,0.8)" 
                    class="px-2 py-5 item-title"
                  >
                    <h2 class="text-center text-capitalize">
                      {{ item.title }} 
                    </h2>
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
          <v-col 
            cols="6" sm="6" md="4" 
            v-for="(post, i) in articles" :key="i"
          >
            <v-card flat tile :to="`/blog/${post.slug}`">
              <v-img
                :src="post.hero"
                class="d-flex align-end"
                height="300"
                
              >
                <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2">
                  <h3 
                    style="font-size:18px" 
                    class="text-capitalize text-center my-2"
                  >
                    {{ post.title }} 
                  </h3>
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
        <v-pagination 
          :length="12" 
          :value="2"
          total-visible="7"
          circle
          class="my-7 py-2 pagination"
          color="primary--text"
        >
        </v-pagination>
      </v-container>
    </v-sheet>

    <!-- Galllery -->
    <Gallery />
    
  </div>
</template>

<script>
import Page from "~/components/PageTitle";
import Heading from "~/components/Heading";
import Gallery from "~/components/Gallery";

export default {
  components: {
    Page,
    Heading,
    Gallery
  },
  computed: {
    articles() {
      return this.$store.getters['blog/articles']
    },
    categories() {
      return this.$store.getters['category/categories']
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
.menubar {
  border-top: 1px solid #BCBCBC;
  border-bottom: 1px solid #BCBCBC;
}

.item-hero {
  position: relative;
}

.item-date {
  position: absolute;
  top: 20px;
  font-size: 14px;
}

.item-title {
  position: absolute;
  bottom: 0px
}

</style>
