<template>
  <div>
    <v-sheet 
      class="pillar-box ma-10 pl-10 ml-lg-1" 
      color="primary"
      tile
    >
      <v-sheet 
        class="img-box"
        tile
      >
        <a :href="`blog/${blogpost.slug}`">
          <v-img :src="blogpost.hero" width="100%" height="100%" class="py-5">
            <span color="grey lighten-2" class="date mx-0 pa-2">
              {{ blogpost.date }}
            </span>
          </v-img>
          </a>
      </v-sheet>
      <div class="post-box">
        <v-card 
          width="100%" 
          height="100%"
          class="pa-5 post-card"
          elevation="2"
        >
          <h1 class="post-title my-3">
            {{ blogpost.title }}
          </h1>
          <p class="post-details">
            <v-icon x-small left color="primary">
              mdi-account
            </v-icon>
            <strong>{{ blogpost.author }}</strong>
            <span class="float-right">
              <v-icon left x-small color="primary">mdi-forum</v-icon>
              25 Comments
            </span>
          </p>
          <p class="post-text my-5">
            {{ blogpost.body.slice(0,251) }}[<b class="primary--text">...</b>]
          </p>
          <p class="post-actions">
            <v-btn 
              color="grey darken-4"  
              class="text-capitalize primary--text"
              small
              :to="`/blog/${blogpost.slug}`"
            >
              Read More
            </v-btn>
            <span class="float-right">
              Share this on: 
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
</template>

<script>
export default {
  name: 'BlogPostCard',
  props: {
    blogpost: {
      type: Object,
      default: () => ({})
    }
  }

}
</script>

<style scoped>
.pillar-box {
  position: relative;
  z-index: 1;
  width: 70px;
  height: 425px;
}
.post-box {
  position: absolute;
  z-index: 3;
  width: 350px;
  height: 425px;
  left: 145%;
  top: 0;
}
.img-box {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: -50px;
  width: 350px;
  height: 450px;
}
span.date {
  font-size: 13px;
  background: #ECEFF1;
  color: black;
  margin-top: 150px;
}
h1.post-title {
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
}
p.post-details {
  font-size: 12px;
  text-transform: uppercase;
}

@media screen and (min-width: 600px) {
  .post-box {
    left: 210%;
  }
  .pillar-box {
    width: 100px;
  }
}
@media screen and (min-width: 960px) {
  .post-box {
    left: 150%;
  }
  .pillar-box {
    width: 70px;
  }
}
@media screen and (min-width: 1300px) {
  .post-box {
    left: 250%;
  }
  .pillar-box {
    width: 100px;
  }
}
</style>