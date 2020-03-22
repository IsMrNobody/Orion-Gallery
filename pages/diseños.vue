<template>
  <div>
    <v-col>
      <v-row row justify="center" align-center>
        <Logo2 class="anim" />
        <Carousel1 />
        <v-col>
          <Slider />
          <Frase />
        </v-col>
      </v-row>
      <h1 class="pb-5 mb-5 mt-5">Libros</h1>
      <v-row>
        <v-col v-for="(unico, i) in unicos" :key="i">
          <Dialog :elemento="unico" />
        </v-col>
      </v-row>
      <h1 class="mb-5 mt-5 pt-5">Covers</h1>
      <v-row>
        <v-col v-for="(unico, i) in unicos3" :key="i">
          <Dialog :elemento="unico" />
        </v-col>
      </v-row>
      <h1 class="mb-5 mt-5 pt-5">Productos</h1>
      <v-row>
        <v-col v-for="(unico, i) in unicos4" :key="i">
          <Dialog :elemento="unico" />
        </v-col>
      </v-row>
      <h1 class="mb-5 mt-5 pt-5">Menus</h1>
      <v-row>
        <v-col v-for="(unico, i) in unicos5" :key="i">
          <Dialog :elemento="unico" />
        </v-col>
      </v-row>
      <h1 class="mb-5 mt-5 pt-5">Flyers</h1>
      <v-row>
        <v-col v-for="(unico, i) in unicos2" :key="i">
          <Dialog :elemento="unico" />
        </v-col>
      </v-row>
    </v-col>
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
    },
    unicos2() {
      return this.$store.state.unicos.flyer
    },
    unicos3() {
      return this.$store.state.unicos.covers
    },
    unicos4() {
      return this.$store.state.unicos.productos
    },
    unicos5() {
      return this.$store.state.unicos.menus
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
