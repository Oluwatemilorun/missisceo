<template>
  <v-sheet tile class="mb-0" width="100%">
    <v-row>
      <v-col cols="3" md="2" v-for="(img, n) in gallery" class="d-flex child-flex pa-0" :key="n">
        <v-img :src="`/img/${img}`">
          <template v-slot:placeholder>
            <v-row align="center" justify="center" class="fill-height">
              <v-progress-circular indeterminate color="primary">
              </v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'Gallery',
  data: () => ({
    gallery: [
      'corporate-man.png',
      'pink-men.png',
      'corporate-man.png',
      'pink-men.png',
      'corporate-man.png',
      'pink-men.png',
      'smiling-lady.png',
      'drummer.png',
      'smiling-lady.png',
      'drummer.png',
      'smiling-lady.png',
      'drummer.png'
    ]
  })
}
</script>

<style>

</style>