<template>
  <v-row justify="center">
    <div class="img">
      <v-img
        width="100vw"
        height="100vh"
        ma-5
        src="https://cdn.mos.cms.futurecdn.net/reaVPYbHtVWG8WHFPrgdvB.jpg"
      >
        <v-row justify="center" class="aladin mt-5">
          <v-toolbarTitle>
            <v-btn text color="">Gallery</v-btn>
          </v-toolbarTitle>
          <v-toolbarIcon> <img src="v.png" alt="" /> </v-toolbarIcon>
          <v-toolbarTitle>
            <v-btn text color="" to="contacto">Contacto</v-btn>
          </v-toolbarTitle>
        </v-row>
        <v-col pa-5 pl-5 ma-5>
          <div class="text-center hidden-sm-and-up cinzel">
            <!-- para asignarle la tipografia a los elementos, utilizo la clase tangerine 
               que esta declarada a nivel de este componente en la parte de style
               si quieres ponerlo a nivel global de la aplicacion ,tienes que crear la clase 
               en el componente layouts/default.vue... revisa tambien nuxt.config.js para
               que veas la sintaxis que tienes que usar para agregar las tipografias-->
            <h1>Orion Gallery</h1>
            <h2>Desde las constelaciones</h2>
          </div>
          <div class="titulos text-left hidden-xs-only cinzel">
            <h1>Orion Gallery</h1>
            <h2>Desde las constelaciones</h2>
          </div>
        </v-col>
      </v-img>
      <div class="text-center pt-5 ma-5 pl-5">
        <p>
          Galleria de arte y diseño
        </p>
        <p class="alegreya pad">
          Galeria de arte y diseño Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sed excepturi officiis dolorem error est doloribus
          officia labore? Commodi quasi nostrum, sequi ipsa iure labore voluptas
          debitis deleniti maiores sed voluptatum!
        </p>
        <Paral />
      </div>
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
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam autem,
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
.aladin {
  font-family: 'Aladin', cursive;
}
.alegreya {
  font-family: 'Alegreya SC', serif;
}
.cinzel {
  font-family: 'Cinzel Decorative', cursive;
}
.titulos {
  font-size: 2rem;
  padding-top: 140px;
  padding-left: 150px;
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
  width: 100vw;
  margin-top: 100px;
  height: 400px;
}
.memory {
  background-image: radial-gradient(rgb(65, 15, 105), rgb(0, 0, 0));
  height: 200px;
  transition: 0.4s;
}
.memory:hover {
  padding-top: 200px;
}
.img {
  width: 100vw;
}
.pad {
  margin: 4%;
  font-size: 40px;
}
</style>
