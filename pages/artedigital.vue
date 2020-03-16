<template>
  <div>
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
    <v-row>
      <v-col v-for="(unico, i) in unicos" :key="i">
        <Dialog :elemento="unico" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Carousel1 from '@/components/artedigital/Carousel1.vue'
// import Descrip from '@/components/artedigital/Descrip.vue'
import Slider from '@/components/artedigital/Slider.vue'
import Frase from '@/components/gallery/Frase.vue'
import Dialog from '@/components/artedigital/Dialog.vue'
import Logo2 from '@/components/Logo2.vue'
export default {
  components: {
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
