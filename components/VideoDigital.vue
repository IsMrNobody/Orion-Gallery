<template>
  <v-row justify="center">
    <div class="">
      <v-img class="tra" width="80em" height="80vh">
        <video
          class=""
          height="auto"
          width="auto"
          autoplay
          loop="1"
          src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2Fvideos%2FBanner%20face.mp4?alt=media&token=6e183791-f2fc-436f-b449-d7221d8f11bc"
        ></video>
      </v-img>
    </div>
  </v-row>
</template>

<style scoped>
.mode {
  mix-blend-mode: screen;
  position: absolute;
  z-index: 1;
}
.position {
  position: absolute;
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
