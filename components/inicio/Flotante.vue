<template>
  <div class="titulos text-left hidden-xs-only">
    <h2 ml-5>Bellatrix</h2>
    <p>Coleciones de objetos estelares</p>
    <v-card
      height="300px"
      width="600px"
      align="center"
      justify="center"
      color="black"
    >
      <v-img
        height="300px"
        width="100%"
        src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/mib.gif?alt=media&token=213be64b-779c-420b-8dd3-51225b5cb4fd"
      >
        <iframe
          height="300"
          width="600"
          src="https://www.youtube.com/embed/VCKMCSy6zEo?showinfo=0&&controls=0&autoplay=1&loop=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
        <v-icon>mdi-star-four-points</v-icon>
      </v-img>
    </v-card>
  </div>
</template>

<style scoped>
.titulos {
  z-index: 1;
  position: absolute;
  font-size: 2rem;
  padding-top: 36%;
  padding-left: 6em;
}
</style>
