<template>
  <v-row justify="center">
    <div class="top">
      <v-row justify="center">
        <Btns class="position" />
      </v-row>
      <v-img class="tra" width="100vw" height="70vh" src="bg.png">
        <video
          class="mode"
          height="auto"
          width="100%"
          autoplay
          loop="1"
          src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2Fvideos%2Fhome03.mp4?alt=media&token=ce796a1b-b46c-452b-87ad-ac008f8bdc15"
        ></video>
      </v-img>
    </div>
  </v-row>
</template>

<script>
import Btns from '@/components/inicio/Btns.vue'
export default {
  components: {
    Btns
  }
}
</script>

<style scoped>
.top {
  margin-top: -80px;
}
.mode {
  mix-blend-mode: screen;
  position: absolute;
  z-index: 1;
}
.position {
  position: absolute;
}
.tra {
  animation: tras 8s;
}

@keyframes tras {
  0% {
    opacity: 0.2;
  }
  80% {
    opacity: 1;
  }
}
</style>
