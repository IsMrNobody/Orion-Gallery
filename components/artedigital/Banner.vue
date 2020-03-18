<template>
  <div>
    <v-row justify="center" align="center" class="re">
      <!-- <h1>hola</h1> -->
      <VerVideo />
    </v-row>
  </div>
</template>

<script>
import VerVideo from '@/components/artedigital/VerVideo.vue'

export default {
  components: {
    VerVideo
  }
}
</script>

<style scoped>
.re {
  /* width: 100vw; */
  background-color: black;
  height: 400px;
}
</style>
