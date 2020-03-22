<template>
  <v-row>
    <v-col>
      <v-row justify="center">
        <Logo2 class="anim" />
      </v-row>
      <!-- <Descrip /> -->
      <v-row justify="center" align-center>
        <Carousel1 />
        <v-col>
          <Slider />
          <Frase />
        </v-col>
      </v-row>
      <h1 class="mb-5 mt-5 pt-5">Digital-Art</h1>
      <v-row>
        <v-col v-for="(unico, i) in unicos" :key="i">
          <Dialog :elemento="unico" />
        </v-col>
      </v-row>
      <Banner class="mt-5 mb-5" />
      <v-row>
        <v-col v-for="(unico, i) in unicos2" :key="i">
          <Dialog :elemento="unico" />
        </v-col>
      </v-row>
      <h1 class="mb-5 mt-5 pt-5">Portadas</h1>
      <v-row>
        <v-col v-for="(unico, i) in unicos3" :key="i">
          <Dialog :elemento="unico" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Carousel1 from '@/components/artedigital/Carousel1.vue'
import Banner from '@/components/artedigital/Banner.vue'
// import Descrip from '@/components/artedigital/Descrip.vue'
import Slider from '@/components/artedigital/Slider.vue'
import Frase from '@/components/gallery/Frase.vue'
import Dialog from '@/components/artedigital/Dialog.vue'
import Logo2 from '@/components/Logo2.vue'
export default {
  components: {
    Banner,
    Carousel1,
    // Descrip,
    Slider,
    Dialog,
    Logo2,
    Frase
  },
  computed: {
    unicos() {
      return this.$store.state.unicos.digital
    },
    unicos2() {
      return this.$store.state.unicos.digital2
    },
    unicos3() {
      return this.$store.state.unicos.digital3
    },
    proyectoActual() {
      return this.$store.state.artedigital.proyectoActual
    }
  }
}
</script>

<style scoped>
.anim {
  margin-top: -4vh;
  animation: log 3s;
}
@keyframes log {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
