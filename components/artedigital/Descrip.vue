<template>
  <div>
    <v-row>
      <h3 v-for="(item, i) in galerias.sub" :key="i">
        {{ item }}
      </h3>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    elemento: {
      type: Object,
      default: () => ({
        sub: 'Orion Gallery'
      })
    }
  },
  computed: {
    galerias() {
      return this.$store.state.artedigital.proyectoActual
    }
  }
}
</script>
