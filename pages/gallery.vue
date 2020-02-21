<template>
  <v-row row justify-center align-center>
    <div class="fotogal">
      <v-carousel hide-delimiters show-arrows-on-hover cycle>
        <v-carousel-item
          v-for="(item, i) in proyectoActual.slider"
          :key="i"
          :src="item"
          touch
        ></v-carousel-item>
      </v-carousel>
      <!-- <v-img
        width="100%"
        src="https://cdn.mos.cms.futurecdn.net/reaVPYbHtVWG8WHFPrgdvB.jpg"
      >
        <v-col v-for="(vista, i) in vistas" :key="i" ma-5 xs1>
          <v-img :src="`${vista.src}`" width="90px" class=""></v-img>
        </v-col>
      </v-img> -->

      <v-btn @click="">

      </v-btn>
    </div>
    <div>
      <v-col class="text-center">
        <img src="favi.png" alt="orion" class="mt-5" width="100px" />
        <blockquote class="blockquote">
          &#8220;Sin miedo a mirar más de lo que quieres ver&#8221;
          <footer>
            <small>
              <em>&mdash;José Millan</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
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
  }),
  computed: {
    proyectoActual() {
      return this.$store.state.proyectos.proyectoActual
    }
  }
}
</script>

<style scoped>
.fotogal {
  width: 100%;
  /* background-color: purple; */
}
.pos {
  position: absolute;
  z-index: 1;
}
</style>
