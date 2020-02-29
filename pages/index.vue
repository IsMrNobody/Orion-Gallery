<template>
  <v-row justify="center">
    <div>
      <!-- <Flotante /> -->
      <v-img
        width="100vw"
        height="100vh"
        ma-5
        class="padi"
        src="https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bginicio2.png?alt=media&token=654fafa2-8d27-47ec-af04-d2499668c088"
      >
        <Botones />
      </v-img>
      <Parrafo1 />
      <Paral />
      <Contain class="tarjetas" />
    </div>
    <v-col>
      <Cartas />
    </v-col>
    <Video />
  </v-row>
</template>

<script>
// import Flotante from '@/components/inicio/Flotante.vue'
import Botones from '@/components/inicio/Botones.vue'
import Contain from '@/components/inicio/Contain.vue'
import Paral from '@/components/inicio/Paral.vue'
import Cartas from '@/components/inicio/Cartas.vue'
import Parrafo1 from '@/components/inicio/Parrafo1.vue'
import Video from '@/components/inicio/Video.vue'
export default {
  components: {
    // Flotante,
    Botones,
    Contain,
    Paral,
    Cartas,
    Video,
    Parrafo1
  }
}
</script>

<style scoped>
.font {
  font-size: 1.5em;
  padding: 8%;
}
.tarjetas {
  margin-top: 200px;
  margin-bottom: 100px;
}
.padi {
  margin-top: -64px;
}
</style>
