<template>
  <div>
    <v-row row justify="center" align-center>
      <Carousel1 />
      <v-col>
        <Slider />
      </v-col>
      <Frase />
    </v-row>
    <v-row>
      <Dialog />
    </v-row>
  </div>
</template>

<script>
import Carousel1 from '@/components/gallery/Carousel1.vue'
import Slider from '@/components/gallery/Slider.vue'
import Frase from '@/components/gallery/Frase.vue'
import Dialog from '@/components/gallery/Dialog.vue'
export default {
  components: {
    Carousel1,
    Slider,
    Dialog,
    Frase
  }
}
</script>
