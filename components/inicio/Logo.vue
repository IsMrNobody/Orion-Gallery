<template>
  <v-toolbarIcon class="pa-5">
    <nuxt-link to="/home">
      <!-- <img width="350px" src="logorion.png" alt="logo" /> -->
      <Lottie :options="defaultOptions" />
    </nuxt-link>
  </v-toolbarIcon>
</template>

<style scoped></style>

<script>
import Lottie from '@/components/Lottie.vue'

import * as animationData from '@/assets/anim.json'

export default {
  components: {
    Lottie
  },
  data: () => ({
    defaultOptions: { animationData }
  })
}
</script>
