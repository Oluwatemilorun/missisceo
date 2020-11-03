<template>
  <v-container fluid class="py-0">
    <v-row>
      <v-col v-for="(img, n) in gallery" :key="n" cols="3" md="2" class="pa-0">
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
  </v-container>
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
      'drummer.png',
    ],
  }),
}
</script>

<style></style>
