<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="black">
        <strong class="subheading">Portal de Orion</strong>
        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <v-btn @click="$vuetify.goTo(0)" icon class="mr-0" title="Go to top">
          <v-icon>mdi-star-four-points</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-instagram', 'mdi-youtube-creator-studio']
  })
}
</script>
