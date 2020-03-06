<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800">
    <v-slide-group v-model="model" class="pa-4 black" center-active show-arrows>
      <v-slide-item
        v-for="(galeria, i) in galerias"
        :key="i"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          @click="toggle"
          class="ma-4 black"
          height="200"
          width="160"
        >
          <v-img
            :src="`${galeria.group}`"
            @click="verProyecto(i)"
            height="200"
            width="160"
          >
            <v-row class="" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  v-text="'mdi-star-four-points'"
                  color="white"
                  size="48"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null
  }),

  computed: {
    galerias() {
      return this.$store.state.diseños.galerias2
    }
  },
  methods: {
    verProyecto(i) {
      this.$store.dispatch('diseños/proyectoActual', i)
    }
  }
}
</script>
