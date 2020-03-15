<template>
  <nuxt-link to="/home">
    <!-- <img width="350px" src="logorion.png" alt="logo" /> -->
    <Lottie2 :options="defaultOptions" class="" />
  </nuxt-link>
</template>

<style scoped></style>

<script>
import Lottie2 from '@/components/Lottie2.vue'

import * as animationData from '@/assets/intro.json'

export default {
  components: {
    Lottie2
  },
  data: () => ({
    defaultOptions: { animationData }
  })
}
</script>
