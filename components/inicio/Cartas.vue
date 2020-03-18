<template>
  <v-container>
    <v-row justify="center" class="text-center">
      <h1>El cinturon de Orión</h1>
    </v-row>
    <v-row>
      <div>
        <v-row justify="center" class="">
          <v-card
            v-for="(cartel, i) in carteles"
            :key="i"
            class="ma-2"
            width="350px"
          >
            <v-img :src="cartel.src" class="memory">
              <Paral2 />
            </v-img>
          </v-card>
        </v-row>
      </div>
      <p class="text-center alegreya pad">
        En nuestra constelación existen infinitas formas de mostrar una
        realidad, en Orión Gallery podrás dar un vistazo de lo mucho que tenemos
        que decir con tan pocas palabras.
      </p>
    </v-row>
  </v-container>
</template>

<script>
import Paral2 from '@/components/inicio/Paral2.vue'
export default {
  components: {
    Paral2
  },
  data: () => ({
    carteles: [
      {
        src:
          'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fcinturon%2Fmib.gif?alt=media&token=69d8e025-565f-4cf1-9a33-1cdb7d7aa312'
      },
      {
        src:
          'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fcinturon%2Fbellatrix.gif?alt=media&token=50dce4e1-b11a-4201-a21e-b11730b2e2d3'
      },
      {
        src:
          'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fcinturon%2Falnitak.png?alt=media&token=80c07545-d6db-4094-b0f6-5d90bce690fa'
      }
    ]
  })
}
</script>

<style scoped>
.memory {
  height: 200px;
  /* width: 100%; */
  transition: 0.4s;
  background-image: radial-gradient(rgb(65, 15, 105), rgb(0, 0, 0));
}
.memory:hover {
  padding-top: 200px;
}
.pad {
  margin: 4% 4%;
  font-size: 30px;
}
</style>
