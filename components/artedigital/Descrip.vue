<template>
  <v-row>
    <p v-for="(item, i) in proyectoActual.sub" :key="i">
      {{ item }}
    </p>
  </v-row>
</template>

<script>
export default {
  computed: {
    proyectoActual() {
      return this.$store.state.artedigital.proyectoActual
    }
  }
}
</script>
