<template>
  <v-row justify="center">
    <div class="pad">
      <v-img width="820px" height="312px">
        <!-- <iframe
          height="100%"
          width="100%"
          src="https://www.youtube.com/embed/VCKMCSy6zEo?playlist=VCKMCSy6zEo&loop=1&showinfo=0&autoplay=1&controls=0&rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; loop"
          allowfullscreen
        >
        </iframe> -->
        <v-btn class="bt">
          hola
        </v-btn>
        <video
          height="100%"
          width="100%"
          autoplay
          loop="1"
          src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2Fvideos%2FBanner%20face.mp4?alt=media&token=6e183791-f2fc-436f-b449-d7221d8f11bc"
        ></video>
      </v-img>
    </div>
  </v-row>
</template>

<style scoped>
.pad {
  margin-bottom: -10px;
}
.bt {
  z-index: 2;
  position: absolute;
}
</style>
