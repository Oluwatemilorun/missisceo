<template>
  <v-container>
    <div class="heading mt-5">
      <div class="divider"></div>
      <div class="title-box">
        <h2 class="px-5">{{ title }}</h2>
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
      default: "Heading"
    }
  }
}
</script>

<style scoped>
.heading .divider {
  border-top: 2px solid #ADADAD;
}
.heading .title-box {
  text-align: center;
  margin-top: -18px;
}
.title-box>h2 {
  display: inline;
  text-transform: uppercase;
  background: #FFFFFF;
  font-size: 22px;
}
</style>