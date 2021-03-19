<template>
  <div>
    <v-img class="img" src="bg.png">
      <v-row justify="center">
        <v-col class="tam text-center">
          <Logo />
          <v-btn to="home" outlined color="blue" class="bot">Entrar</v-btn>
        </v-col>
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
.tam {
  position: absolute;
  width: 700px;
  height: 700px;
}
.mode {
  z-index: 1;
  mix-blend-mode: screen;
}
.bot {
  z-index: 1;
  margin-top: -300px;
  /* position: absolute; */
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
  height: 100vh;
  animation: tras 8s;
}
@keyframes tras {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
