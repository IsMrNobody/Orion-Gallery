<template>
  <div>
    <v-row justify="center">
      <v-toolbarIcon class="logo">
        <img src="logorion.png" alt="logo" class="ma-5 log" />
      </v-toolbarIcon>
    </v-row>
    <v-row justify="center">
      <v-toolbarTitle class="botones">
        <!-- <v-btn text to="/">inicio</v-btn> -->
        <v-btn text color="" to="gallery">Gallery</v-btn>
        <v-btn text color="" to="contacto">Contacto</v-btn>
      </v-toolbarTitle>
    </v-row>
  </div>
</template>

<style scoped>
.botones {
  z-index: 1;
  animation: bot 6s;
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
.logo {
  z-index: 1;
}
.log {
  width: 90vw;
  max-width: 450px;
  animation: log 3s;
}

@keyframes log {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
