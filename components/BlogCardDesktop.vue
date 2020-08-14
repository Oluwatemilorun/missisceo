<template>
  <v-row 
    justify="center"
    class="py-10 mt-10 box"
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
      <v-card class="pa-5" height="100%">
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
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>