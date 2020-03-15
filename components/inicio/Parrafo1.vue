<template>
  <div>
    <v-col pa-5 pl-5 ma-5>
      <div class="text-center hidden-sm-and-up">
        <h2>Desde las constelaciones</h2>
        <p>
          La constelación de Orion se ve desde todos los puntos de nuestro
          planeta y han sido conocidas por todas las civilizaciones de todos los
          tiempos. Los Egipcios, los Vikingos, Los Maya, Los Griegos, los
          Romanos... Mas alla de los siglos, si levantamos la vista aún podemos
          ver y admirar lo mismo que vieron ellos, nuestros ancestros.
        </p>
      </div>
    </v-col>
    <div class="ma-5 text-center hidden-xs-only">
      <v-row justify="center">
        <div class="display-3">
          <Lottie :options="defaultOptions" />
          <!-- <v-icon>mdi-star-four-points</v-icon>
          <v-icon>mdi-star-four-points</v-icon>
          <v-icon>mdi-star-four-points</v-icon> -->
        </div>
        <p class="pad text-center">
          La constelación de Orion se ve desde todos los puntos de nuestro
          planeta y han sido conocidas por todas las civilizaciones de todos los
          tiempos. Los Egipcios, los Vikingos, Los Maya, Los Griegos, los
          Romanos... Mas alla de los siglos, si levantamos la vista aún podemos
          ver y admirar lo mismo que vieron ellos, nuestros ancestros.
        </p>
      </v-row>
    </div>
    <Paral />
  </div>
</template>

<script>
import Paral from '@/components/inicio/Paral.vue'
import Lottie from '@/components/Lottie.vue'

import * as animationData from '@/assets/horizontal.json'
export default {
  components: {
    Paral,
    Lottie
  },
  data: () => ({
    defaultOptions: { animationData }
  })
}
</script>

<style scoped>
.pad {
  margin: 4% 4%;
  padding: 4%;
  font-size: 30px;
}
</style>
