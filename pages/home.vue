<template>
  <v-row justify="center">
    <div>
      <v-col>
        <Intro />
        <Parrafo1 />
      </v-col>
      <Contain class="tarjetas" />
      <Contain2 class="tarjetas" />
      <Contain3 class="tarjetas" />
    </div>
    <v-col>
      <Cartas />
      <End />
    </v-col>
  </v-row>
</template>

<script>
import Intro from '@/components/inicio/Intro.vue'
import End from '@/components/inicio/End.vue'
import Parrafo1 from '@/components/inicio/Parrafo1.vue'
import Contain from '@/components/inicio/Contain.vue'
import Contain2 from '@/components/inicio/Contain2.vue'
import Contain3 from '@/components/inicio/Contain3.vue'
import Cartas from '@/components/inicio/Cartas.vue'
export default {
  components: {
    Intro,
    End,
    Parrafo1,
    Contain,
    Contain2,
    Contain3,
    Cartas
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
