<template>
  <div id="post">
    <v-container fluid>
      <v-row>
        <!-- Blog Post Content -->
        <v-col cols="12" sm="7" lg="8" class="pa-5 pr-10">
          <h1 class="post-title text-capitalize">
            {{ article.title }}
          </h1>
          <v-row class="post-details">
            <v-col cols="6">
              <v-icon x-small left color="primary">
                mdi-account
              </v-icon>
              <strong>{{ article.author }}</strong>
            </v-col>
            <v-col cols="6" class="text-right pr-10">
              <v-icon left x-small color="primary">
                mdi-clock
              </v-icon>
              {{ article.date }}
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-img :src="article.hero" max-height="400" contain></v-img>
            </v-col>
          </v-row>
          <div class="post-text">
            <p v-for="k in 3" :key="k">
              {{ article.body }}
            </p>
          </div>
          <div class="post-actions py-7">
            <span class="float-right text-uppercase ">
              Share this post on: 
              <v-btn 
                color="accent lighten-1"  
                dark
                small
                class="text-lowercase"
              >
                <v-icon left>mdi-twitter</v-icon>
                twitter
              </v-btn>
              <v-btn 
                color="accent darken-1"  
                dark
                small
                class="text-lowercase"
              >
                <v-icon left>mdi-facebook</v-icon>
                facebook
              </v-btn>
            </span>
          </div>

          <div class="prev-next-post my-5">
            <v-row class="primary--text font-weight-bold">
              <v-col cols="6">
                <a href="">
                  <v-icon large left color="primary">mdi-chevron-left</v-icon>
                  PREV
                  <p class="pl-10">
                    Est blanditiis dolorem culpa incidunt minus dig
                  </p>
                </a>
              </v-col>
              <v-col cols="6" class="text-right">
                <a href="">
                  NEXT
                  <v-icon large right color="primary">mdi-chevron-right</v-icon>
                  <p class="pr-10">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                  </p>
                </a>
              </v-col>
            </v-row>
          </div>

          <div class="related-posts mt-3">
            <heading title="Related posts" />
            <v-slide-group show-arrows class="mb-10 mt-3">
              <v-slide-item v-for="m in 10" :key="m" class="">
                <v-card
                  height="275"
                  max-width="250"
                  class="mx-2"
                >
                  <v-img
                    src="/img/sunset.jpg"
                    class="d-flex align-end"
                    height="100%" 
                    width="100%"
                  >
                    <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2">
                      <div class="text-capitalize font-weight-bold">
                        Quis autem vel eum iure reprehenderit qui in ea voluptate
                        {{ m }}
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
              </v-slide-item>
            </v-slide-group>
          </div>

          <div class="comments mt-5">
            <heading title="5 Replies" />
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card 
                  color="grey lighten-3" 
                  class="pa-2 mb-5"
                  v-for="(name, j) in names" :key="j"
                >
                  <v-row align="center">
                    <v-col cols="3" sm="4" md="3" lg="2">
                      <v-avatar
                        size="85"
                      >
                        <img src="/img/products/hair-dryer.jpg" alt="person" />
                      </v-avatar>
                    </v-col>
                    <v-col cols="9" sm="8" md="9" lg="10">
                      <h4>{{ name }}</h4>
                      <small class="text--secondary">
                       <span class="primary--text">#</span> 2{{j}} September 2099
                      </small>
                    </v-col>
                  </v-row>
                  
                  <p class="px-2">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor 
                    sit amet, consectetur, adipisci velit, qui dolorem ipsum quia dolor.
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="comment-box mt-5">
            <heading title="Leave a reply" />
            <reply-box />
          </div>

        </v-col>

        <!-- Sidebar -->
        <v-col cols="12" sm="5" lg="4">
          <sidebar />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    heading: () => import('~/components/heading'),
    sidebar: () => import('~/components/post/sidebar'),
    replyBox: () => import('~/components/post/replybox')
  },
  data() {
    return {
      slug: this.$route.params.slug,
      names: [
        'Timo Werner',
        'Hakim Ziyech',
        'Mason Mount',
        'Reece James',
        'Ngolo Kante'
      ]
    }
  },
  computed: {
    ...mapGetters(['articles']),
    article() {
      return this.articles.find(el => el.slug === this.slug)
    }
  },
  head() {
    const text = this.article.title;
    const title = text.replace(/(^\w)|(\s\w)/g, str => str.toUpperCase());
    return {
      title
    };
  }
}
</script>

<style scoped>
.post-details {
  font-size: 12px;
  text-transform: uppercase;
}
.post-text>p:nth-child(1)::first-letter {
  font-size: 24px;
  margin: 1px;
  font-weight: bold;
}
</style>