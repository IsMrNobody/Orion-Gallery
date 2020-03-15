<template>
  <div>
    <Logo2 class="anim" />
    <v-row justify="center" align-center>
      <h3 v-for="(item, i) in proyectoActual.sub" :key="i">{{ item }}</h3>
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
import Slider from '@/components/artedigital/Slider.vue'
import Frase from '@/components/gallery/Frase.vue'
import Dialog from '@/components/artedigital/Dialog.vue'
import Logo2 from '@/components/Logo2.vue'
export default {
  components: {
    Carousel1,
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
  margin-top: -20vh;
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
