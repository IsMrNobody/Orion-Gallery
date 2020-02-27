<template>
  <div>
    <v-row row justify="center" align-center>
      <v-toolbarIcon class="pb">
        <img width="250px" src="logorion.png" alt="" />
      </v-toolbarIcon>
      <Carousel1 />
      <v-col>
        <Slider />
      </v-col>
      <Frase />
    </v-row>
    <v-row>
      <!-- aqui haces el v-for fuera del elemento y metes el elemento Dialog dentro para poder pasarle los datos -->
      <v-col v-for="(unico, i) in unicos" :key="i">
        <Dialog :elemento="unico" />
      </v-col>
    </v-row>
    <div>
      <Paral />
    </div>
  </div>
</template>

<script>
import Carousel1 from '@/components/gallery/Carousel1.vue'
import Slider from '@/components/gallery/Slider.vue'
import Frase from '@/components/gallery/Frase.vue'
import Dialog from '@/components/gallery/Dialog.vue'
import Paral from '@/components/inicio/Paral.vue'
export default {
  components: {
    Carousel1,
    Slider,
    Dialog,
    Paral,
    Frase
  },
  // aqui traes unicos desde vuex
  computed: {
    unicos() {
      return this.$store.state.unicos.unidad
    }
  }
}
</script>

<style scoped>
.pb {
  padding-bottom: 20px;
}
</style>
