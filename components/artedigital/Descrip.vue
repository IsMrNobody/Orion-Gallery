<template>
  <div>
    <v-card-text class="d-flex">
      <v-card-subtitle
        v-for="(item, i) in proyectoActual.sub"
        :key="i"
        class="text-justify"
      >
        <p>
          {{ item }}
        </p>
      </v-card-subtitle>
    </v-card-text>
  </div>
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
