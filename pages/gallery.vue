<template>
  <v-layout row justify-center align-center>
    <div class="fotogal">
      <v-img
        width="100%"
        src="https://cdn.mos.cms.futurecdn.net/reaVPYbHtVWG8WHFPrgdvB.jpg"
      >
        <v-flex v-for="(vista, i) in vistas" :key="i" ma-5 xs1>
          <v-img :src="`${vista.src}`" width="90px" class="">
            <Paral2 />
          </v-img>
        </v-flex>
      </v-img>
    </div>
    <v-flex class="text-center">
      <img src="vid.png" alt="orion" class="mt-5" width="100px" />
      <blockquote class="blockquote">
        &#8220;Sin miedo a mirar más de lo que quieres ver&#8221;
        <!-- <p>Sin miedo a mirar más de lo que quieres ver</p> -->
        <footer>
          <small>
            <em>&mdash;José Millan</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
    <div>
      <Contain />
    </div>
  </v-layout>
</template>

<script>
import Contain from '@/components/Contain.vue'
export default {
  components: {
    Contain
  },
  data: () => ({
    vistas: [
      {
        src: 'icon.png'
      },
      {
        src: 'icon.png'
      },
      {
        src: 'icon.png'
      }
    ]
  })
}
</script>

<style scoped>
.fotogal {
  width: 100%;
  background-color: purple;
}
.pos {
  position: absolute;
  z-index: 1;
}
</style>
