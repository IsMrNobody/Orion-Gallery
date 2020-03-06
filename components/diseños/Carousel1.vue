<template>
  <v-carousel hide-delimiters show-arrows-on-hover height="600px" cycle>
    <v-carousel-item
      v-for="(item, i) in proyectoActual.slider"
      :key="i"
      :src="item"
      touch
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  computed: {
    proyectoActual() {
      return this.$store.state.diseños.proyectoActual
    }
  }
}
</script>

<style scoped></style>
