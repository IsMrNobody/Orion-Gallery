<template>
  <div justify="center">
    <v-img class="img" src="bg.png">
      <v-row align="center" justify="center">
        <Logo class="pad" />
        <v-btn to="home" class="bot">Entrar</v-btn>
      </v-row>
      <video
        class="mode"
        width="100%"
        autoplay
        loop
        src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2Fvideos%2Fhome03.mp4?alt=media&token=ce796a1b-b46c-452b-87ad-ac008f8bdc15"
      ></video>
    </v-img>
  </div>
</template>

<script>
import Logo from '@/components/inicio/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.mode {
  z-index: 1;
  mix-blend-mode: screen;
}
.bot {
  z-index: 1;
  margin-top: 60vh;
  position: absolute;
  animation: bot 10s;
}
@keyframes bot {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.img {
  width: 100vw;
  height: 100vh;
  animation: tras 8s;
}
.pad {
  margin-top: 40vh;
  animation: log 3s;
  position: absolute;
}
@keyframes log {
  0% {
    opacity: 0;
    margin-top: 50vh;
  }
  100% {
    opacity: 1;
    margin-top: 40vh;
  }
}
</style>
