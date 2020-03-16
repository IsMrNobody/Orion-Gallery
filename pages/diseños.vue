<template>
  <div>
    <v-row row justify="center" align-center>
      <Logo2 class="anim" />
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
import Carousel1 from '@/components/diseños/Carousel1.vue'
import Slider from '@/components/diseños/Slider.vue'
import Frase from '@/components/gallery/Frase.vue'
import Dialog from '@/components/diseños/Dialog.vue'
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
      return this.$store.state.unicos.diseños
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
