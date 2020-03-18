<template>
  <div class="text-center">
    <v-tooltip top color="purple">
      <template v-slot:activator="{ on }">
        <v-btn
          @click="overlay = !overlay"
          v-on="on"
          x-large
          icon
          color="blue lighten-2"
          dark
        >
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </template>
      <span>Ver video</span>
    </v-tooltip>
    <v-overlay :value="overlay">
      <v-btn @click="overlay = false" icon class="bt">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <VideoDigital />
    </v-overlay>
  </div>
</template>

<script>
import VideoDigital from '@/components/VideoDigital.vue'
export default {
  components: {
    VideoDigital
  },
  data: () => ({
    overlay: false
  })
}
</script>
