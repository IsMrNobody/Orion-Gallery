<template>
  <v-row justify="center">
    <div>
      <div class="titulos text-left hidden-xs-only">
        <h2 ml-5>Bellatrix</h2>
        <p>Coleciones de objetos estelares</p>
        <v-card
          height="200px"
          width="300px"
          align="center"
          justify="center"
          color="black"
        >
          <v-img
            width="100%"
            height="200px"
            src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/mib.gif?alt=media&token=213be64b-779c-420b-8dd3-51225b5cb4fd"
          >
            <v-icon>mdi-star-four-points</v-icon>
          </v-img>
        </v-card>
      </div>
      <v-img
        width="100vw"
        height="100vh"
        ma-5
        class="padi"
        src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bginicio2.png?alt=media&token=654fafa2-8d27-47ec-af04-d2499668c088"
      >
        <v-row justify="center" class="mt-5 pa-5">
          <v-row justify="space-around" class="mt-5 ma-5">
            <v-toolbarIcon>
              <img width="350px" src="logorion.png" alt="" />
            </v-toolbarIcon>
            <v-toolbarTitle class="mt-5">
              <v-btn text color="">Gallery</v-btn>
              <v-btn text color="" to="contacto">Orion</v-btn>
              <v-btn text color="" to="contacto">Contacto</v-btn>
            </v-toolbarTitle>
          </v-row>
        </v-row>
      </v-img>
      <v-col pa-5 pl-5 ma-5>
        <div class="text-center hidden-sm-and-up">
          <h1>Orion Gallery</h1>
          <h2>Desde las constelaciones</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita
            hic dicta cum facilis ex asperiores sit dolorem neque maiores rem
            adipisci sint tempora blanditiis, tenetur et similique unde culpa.
          </p>
        </div>
      </v-col>
      <div class="ma-5 text-center hidden-xs-only">
        <div class="display-3">
          <v-icon>mdi-star-four-points</v-icon>
          <v-icon>mdi-star-four-points</v-icon>
          <v-icon>mdi-star-four-points</v-icon>
        </div>
        <p class="pad text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui dolor
          quos, dolores ipsum voluptatem impedit odit laboriosam accusamus
          asperiores velit esse consequatur vitae, sunt inventore fugit
          dignissimos hic dolorum.
        </p>
      </div>
      <Paral />
      <div>
        <Contain class="tarjetas" />
      </div>
    </div>
    <v-col v-for="(cartel, i) in carteles" :key="i" ma-5 md3>
      <v-img :src="`${cartel.src}`" max-width="400px" class="memory">
        <Paral2 />
      </v-img>
    </v-col>
    <p class="text-center alegreya pad">
      Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Aliquam autem,
      repellendus maxime ea iure necessitatibus voluptatibus cum harum ab
      repellat sapiente dolore amet unde corrupti suscipit voluptatem eius
      recusandae voluptate.
    </p>
    <div class="carousel">
      <Carousel />
    </div>
  </v-row>
</template>

<script>
import Contain from '@/components/Contain.vue'
import Paral from '@/components/Paral.vue'
import Paral2 from '@/components/Paral2.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  components: {
    Contain,
    Carousel,
    Paral2,
    Paral
  },
  data: () => ({
    carteles: [
      {
        // src: 'icon.png',
        titulo: 'Foto1'
      },
      {
        src: 'foto.jpg',
        titulo: 'Foto2'
      },
      {
        // src: 'icon.png'
        titulo: 'Foto3'
      }
    ]
  })
}
</script>

<style scoped>
.titulos {
  z-index: 1;
  position: absolute;
  font-size: 2rem;
  padding-top: 36%;
  padding-left: 6em;
}
.font {
  font-size: 1.5em;
  padding: 8%;
}
.tarjetas {
  margin-top: 200px;
  margin-bottom: 100px;
}
.carousel {
  width: 100%;
  margin-top: 100px;
}
.memory {
  background-image: radial-gradient(rgb(65, 15, 105), rgb(0, 0, 0));
  height: 200px;
  transition: 0.4s;
}
.memory:hover {
  padding-top: 200px;
}
.pad {
  margin: 4% 4%;
  font-size: 30px;
}
.padi {
  margin-top: -64px;
}
</style>
