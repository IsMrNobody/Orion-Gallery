<template>
  <v-row row justify="center" align-center>
    <div class="fotogal">
      <v-carousel hide-delimiters show-arrows-on-hover cycle>
        <v-carousel-item
          v-for="(item, i) in proyectoActual.slider"
          :key="i"
          :src="item"
          touch
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div>
      <Group />
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
import Group from '@/components/Group.vue'
export default {
  components: {
    Group
  },
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
}
.pos {
  position: absolute;
  z-index: 1;
}
</style>
