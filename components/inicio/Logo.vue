<template>
    <nuxt-link to="/home">
      <!-- <img width="350px" src="logorion.png" alt="logo" /> -->
      <Lottie :options="defaultOptions" />
    </nuxt-link>
</template>

<style scoped></style>

<script>
import Lottie from '@/components/Lottie.vue'

import * as animationData from '@/assets/intro.json'

export default {
  components: {
    Lottie
  },
  data: () => ({
    defaultOptions: { animationData }
  })
}
</script>
