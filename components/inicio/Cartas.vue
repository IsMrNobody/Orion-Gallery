<template>
  <v-container>
    <v-row justify="center">
      <h2>El cinturon de Orion</h2>
    </v-row>
    <v-row>
      <v-row justify="center">
        <v-card v-for="(cartel, i) in carteles" :key="i" class="">
          <v-img :src="cartel.src" class="memory">
            <Paral2 />
          </v-img>
        </v-card>
      </v-row>
      <p class="text-center alegreya pad">
        En nuestra constelación existen infinitas formas de mostrar una
        realidad, en Orion Gallery podrás dar un vistazo de lo mucho que tenemos
        que decir con tan pocas palabras.
      </p>
    </v-row>
  </v-container>
</template>

import Botones from '@/layouts/Botones.vue'
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
          'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fcinturon%2Fmintaka.png?alt=media&token=cc1baa8d-6a94-4f40-96a8-2960fe8384f2'
      },
      {
        src:
          'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fcinturon%2Falnilam.png?alt=media&token=bb8b0c6d-6640-4022-95ae-db0fdc4040d7'
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
  width: 380px;
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
