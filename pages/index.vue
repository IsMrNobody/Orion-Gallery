<template>
  <v-row justify="center">
    <div>
      <Video2 />
    </div>
    <div>
      <Parrafo1 />
      <Paral />
      <Contain class="tarjetas" />
    </div>
    <v-col>
      <Cartas />
    </v-col>
  </v-row>
</template>

<script>
import Video2 from '@/components/inicio/Video2.vue'
import Contain from '@/components/inicio/Contain.vue'
import Paral from '@/components/inicio/Paral.vue'
import Cartas from '@/components/inicio/Cartas.vue'
import Parrafo1 from '@/components/inicio/Parrafo1.vue'
export default {
  components: {
    Video2,
    Contain,
    Paral,
    Cartas,
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
</style>
