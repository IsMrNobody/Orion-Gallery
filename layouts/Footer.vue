<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="black">
        <strong class="subheading">Portal de Orion</strong>
        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          :href="icon.to"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
        <v-btn @click="$vuetify.goTo(0)" icon class="mr-0" title="up">
          <v-icon>mdi-star-four-points</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Orion</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: 'mdi-facebook',
        to: 'https://www.facebook.com/orion.visionaryart/'
      },
      {
        icon: 'mdi-instagram',
        to: 'https://www.instagram.com/orion_gallery/'
      }
    ]
  })
}
</script>
