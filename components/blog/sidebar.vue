<template>
  <div class="sidebar">
    <div class="search">
      <heading title="search" />
      <v-text-field
        append-icon="mdi-magnify"
        outlined
        label="Search for topics"
      ></v-text-field>
    </div>

    <div class="categories">
      <heading title="Categories" />
      <v-list color="rgba(0,0,0,0)" flat class="pt-0 mt-0">
        <v-list-item 
          v-for="(item, n) in categories" 
          :key="n"
          class="py-0"
          to="#"
        >
          <v-list-item-title class="py-0">
            {{ item }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>

    <div class="ads pa-2">
      <heading title="Adverts" />
      <v-sheet
        color="grey lighten-3"
        class="my-5"
        :height="height"
        width="100%"
        tile
        v-for="(height, i) in heights" :key="i"
      >
        <v-row align="center" justify="center" class="fill-height">
          <h1 class="font-weight-thin text--secondary text-center">
            ADS {{ height }}
          </h1>
        </v-row>
      </v-sheet>
    </div>  
  </div>
</template>

<script>
export default {
  components: {
    heading: () => import('~/components/heading')
  },
  data() {
    return {
      categories: [
        'Beauty',
        'Motherhood',
        'Lifestyle',
        'Marriage',
        'Faith',
        'Video'
      ],
      heights: [
        400,
        600,
        350,
        600
      ]
    }
  }
}
</script>

<style>

</style>