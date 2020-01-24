<template>
  <v-layout column justify-center align-center>
    <div class="img">
      <v-img
        width="100vw"
        height="100vh"
        ma-5
        src="https://cdn.mos.cms.futurecdn.net/reaVPYbHtVWG8WHFPrgdvB.jpg"
      >
        <vLayout justify-center align-center justify-space-around mt-5>
          <vToolbarTitle> Gallery </vToolbarTitle>
          <vToolbarIcon> <img src="v.png" alt="" /> </vToolbarIcon>
          <vToolbarTitle> Contact </vToolbarTitle>
        </vLayout>
        <v-flex pa-5 pl-5 ma-5>
          <div
            style="font-family: 'Tangerine'"
            class="text-center hidden-sm-and-up"
          >
            <h1>Orion Gallery</h1>
            <h2>Desde las constelaciones</h2>
          </div>
          <div class="titulos text-left hidden-xs-only">
            <h1>Orion Gallery</h1>
            <h2>Desde las constelaciones</h2>
          </div>
        </v-flex>
      </v-img>
      <div class="text-center pt-5">
        <p>
          Galleria de arte y diseño
        </p>
        <p class="font">
          Galleria de arte y diseño Lorem ipsum dolor sit amet consectetur
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
    <v-layout row justify-center>
      <v-flex v-for="(cartel, i) in carteles" :key="i" ma-5 md3>
        <v-img :src="`${cartel.src}`" width="400px" class="memory">
          <Paral2 />
        </v-img>
      </v-flex>
    </v-layout>
    <p class="text-center">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam autem,
      repellendus maxime ea iure necessitatibus voluptatibus cum harum ab
      repellat sapiente dolore amet unde corrupti suscipit voluptatem eius
      recusandae voluptate.
    </p>
    <div class="carousel">
      <Carousel />
    </div>
  </v-layout>
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
</style>
