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
}
.logo {
  z-index: 1;
}
.log {
  max-width: 450px;
  width: 90vw;
}
</style>
