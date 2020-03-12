<template>
  <div>
    <v-row row justify="center" align-center>
      <Logo class="anim" />
      <Carousel1 />
      <v-col>
        <Slider />
        <Frase />
      </v-col>
    </v-row>
    <v-row>
      <!-- aqui haces el v-for fuera del elemento y metes el elemento Dialog dentro para poder pasarle los datos -->
      <v-col v-for="(unico, i) in unicos" :key="i">
        <Dialog :elemento="unico" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Carousel1 from '@/components/gallery/Carousel1.vue'
import Slider from '@/components/gallery/Slider.vue'
import Frase from '@/components/gallery/Frase.vue'
import Dialog from '@/components/gallery/Dialog.vue'
import Logo from '@/components/inicio/Logo.vue'
export default {
  components: {
    Carousel1,
    Slider,
    Dialog,
    Logo,
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
.anim {
  margin-top: -19vh;
  animation: log 3s;
}
@keyframes log {
  0% {
    opacity: 0;
    /* margin-top: -5vh; */
  }
  100% {
    opacity: 1;
    /* margin-top: 0; */
  }
}
</style>
