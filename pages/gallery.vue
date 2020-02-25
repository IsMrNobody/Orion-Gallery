<template>
  <v-row row justify="center" align-center>
    <Carousel1 />
    <div>
      <Slider />
      <Frase />
    </div>
  </v-row>
</template>

<script>
import Carousel1 from '@/components/gallery/Carousel1.vue'
import Slider from '@/components/gallery/Slider.vue'
import Frase from '@/components/gallery/Frase.vue'
export default {
  components: {
    Carousel1,
    Slider,
    Frase
  }
}
</script>
