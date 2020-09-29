<template>
  <v-row 
    justify="center" 
    class="box my-10"
    style="min-height: 400px"
  >
    <v-col cols="6" class="post-img px-1">
      <v-card 
        flat 
        tile 
        height="100%" 
        color="grey lighten-4"
        :to="`/blog/${article.slug}`"
      >
        <v-img :src="article.hero" height="inherit">
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
      <v-card class="pa-5" height="100%">
        <h2 class="text-capitalize">{{ article.title }}</h2>
        <p class="pt-2 pb-0 post-text">
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
          <v-btn icon color="accent darken-1" small>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon color="accent lighten-1" small>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>