<template>
  <div>
    <v-row justify="center">
      <v-toolbarIcon class="logo">
        <img src="logorion.png" alt="logo" class="ma-5 log" />
      </v-toolbarIcon>
    </v-row>
    <v-row justify="center" class="ma-5">
      <v-toolbarTitle class="botones ma-5">
        <!-- <v-btn text to="/">inicio</v-btn> -->
        <v-btn text class="bor" to="gallery">Mintaka</v-btn>
        <v-btn text class="bor" to="artedigital">Alnilam</v-btn>
        <v-btn text class="bor" to="diseños">Alnitak</v-btn>
      </v-toolbarTitle>
    </v-row>
  </div>
</template>

<style scoped>
.bor {
  transition: 1s;
}
.bor:before {
  content: '';
  display: block;
  position: absolute;
  background: blueviolet;
  width: 100%;
}
.bor:hover {
  border: 0.8px solid #a921b6;
}
.botones {
  font-family: 'aladin, cusive';
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
