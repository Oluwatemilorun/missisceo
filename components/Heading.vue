<template>
  <v-container>
    <div class="heading mt-5">
      <div class="divider"></div>
      <div class="title-box">
        <span class="title font-weight-bold px-5 white text-uppercase">
          {{ title }}
        </span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    title: {
      type: String,
      default: 'Heading',
    },
  },
}
</script>

<style scoped>
.heading .divider {
  border-top: 2px solid #ccc;
}
.heading .title-box {
  text-align: center;
  margin-top: -18px;
}
</style>
