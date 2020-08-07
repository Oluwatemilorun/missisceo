<template>
  <div id="post">
    <v-container fluid>
      <v-row align="center" justify="center">
        <!-- Blog Post Content -->
        <v-col cols="12" sm="10" md="9" lg="8" class="">
          <div class="heading mt-5 mb-5">
            <div class="divider"></div>
            <div class="title-box">
              <h5 class="px-5 text-uppercase">
                {{ article.date }} // {{ article.category }}
              </h5>
            </div>
          </div>
          <h1 class="post-title text-capitalize">
            {{ article.title }}
          </h1>
          <v-row align="center" justify="center" class="my-5">
            <v-col cols="12">
              <v-img :src="article.hero" max-height="400" contain></v-img>
            </v-col>
          </v-row>
          <div class="post-text">
            <p v-for="k in 4" :key="k">
              {{ article.body }}
            </p>
          </div>
          <div class="post-actions py-7 text-center">
            <h3 class="text-uppercase my-3">
              Share this post on
            </h3>
            <v-btn 
              :color="item.color"  
              dark
              depressed
              class="share mr-3"
              v-for="(item, q) in share" :key="q"
            >
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.text }}
            </v-btn>
          </div>

          <div class="prev-next-post my-5">
            <v-row class="primary--text font-weight-bold">
              <v-col cols="6">
                <a :href="`/blog/${prevArticle.slug}`">
                  <v-icon large left color="primary">mdi-chevron-left</v-icon>
                  PREV
                  <p class="pl-10">
                    <big>{{ prevArticle.title }}</big>
                  </p>
                </a>
              </v-col>
              <v-col cols="6" class="text-right">
                <a :href="`/blog/${nextArticle.slug}`">
                  NEXT
                  <v-icon large right color="primary">mdi-chevron-right</v-icon>
                  <p class="pr-10">
                    <big>{{ nextArticle.title }}</big>
                  </p>
                </a>
              </v-col>
            </v-row>
          </div>

          <div class="related-posts mt-3">
            <heading title="Related posts" />
            <v-slide-group show-arrows class="mb-10 mt-3">
              <v-slide-item v-for="(post, m) in articles.slice(0,6)" :key="m" class="">
                <a :href="`/blog/${post.slug}`">
                  <v-card
                    height="275"
                    width="250"
                    class="mx-2"
                  >
                    <v-img
                      :src="post.hero"
                      class="d-flex align-end"
                      height="100%" 
                      width="100%"
                    >
                      <v-sheet tile color="rgba(255,255,255,0.8)" class="pa-2">
                        <h4 class="text-capitalize text-center">
                          {{ post.title }}
                        </h4>
                      </v-sheet>
                      <template v-slot:placeholder>
                        <v-row align="center" justify="center" class="fill-height">
                          <v-progress-circular indeterminate color="primary">
                          </v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </a>
              </v-slide-item>
            </v-slide-group>
          </div>

          <div class="comments mt-5">
            <heading title="5 comments" />
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card 
                  color="grey lighten-5" 
                  class="pa-2 mb-5"
                  v-for="(name, j) in names" :key="j"
                  flat
                >
                  <v-row align="center">
                    <v-col cols="3" sm="4" md="3" lg="2">
                      <v-avatar
                        size="85"
                      >
                        <img src="/img/man.png" alt="person" />
                      </v-avatar>
                    </v-col>
                    <v-col cols="9" sm="8" md="9" lg="10">
                      <h4>{{ name }}</h4>
                      <small class="text--secondary">
                       <span class="primary--text">#</span> 2{{j}} September 2099
                      </small>
                    </v-col>
                  </v-row>
                  
                  <p class="px-10">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor 
                    sit amet, consectetur, adipisci velit, qui dolorem ipsum quia dolor.
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="comment-box my-5">
            <heading title="Leave a comment" />
            <reply-box />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Gallery -->
    <Gallery />
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    heading: () => import('~/components/heading'),
    replyBox: () => import('~/components/blog/replybox'),
    Gallery: () => import('~/components/Gallery')
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
      ],
      share: [
        { icon: 'mdi-whatsapp', color: 'green darken-1', text: 'WhatsApp' },
        { icon: 'mdi-facebook', color: 'accent darken-1', text: 'facebook' },
        { icon: 'mdi-twitter', color: 'accent lighten-1', text: 'twitter' }
      ]
    }
  },
  computed: {
    ...mapGetters(['articles']),
    article() {
      return this.articles.find(el => el.slug === this.slug)
    },
    //newBP(){
      //let item = {...this.article}
      //return item
    //},
    prevArticle() {
      const n = this.articles.indexOf(this.article);
      const prev = this.articles.find(el => this.articles.indexOf(el) + 1 === n);
      if (n === 0) {
        return this.article
      }
      return prev
    },
    nextArticle() {
      const n = this.articles.indexOf(this.article);
      const nxt = this.articles.find(el => this.articles.indexOf(el) - 1 === n);
      if (n === this.articles.length - 1 ) {
        return this.articles[0]
      }
      return nxt
    },
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
.post-text>p:nth-child(1)::first-letter {
  font-size: 28px;
  margin: 1px;
  font-weight: bold;
}
.heading .divider {
  border-top: 2px solid #ADADAD;
}
.heading .title-box {
  text-align: center;
  margin-top: -13px;
}
.title-box>h5 {
  display: inline;
  text-transform: uppercase;
  background: #FFFFFF;
}
.share {
  text-transform: none;
}
</style>