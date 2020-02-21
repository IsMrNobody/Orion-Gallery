<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800">
    <v-slide-group v-model="model" class="pa-4 black" center-active show-arrows>
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          @click="toggle"
          class="ma-4 black"
          height="200"
          width="100"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon
                v-if="active"
                v-text="'mdi-star-four-points'"
                color="white"
                size="48"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null
  })
}
</script>
