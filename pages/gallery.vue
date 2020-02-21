<template>
  <v-row row justify-center align-center>
    <div class="fotogal">
      <v-carousel hide-delimiters show-arrows-on-hover cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
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
      <Contain />
    </div>
  </v-row>
</template>

<script>
import Contain from '@/components/Contain.vue'
import Group from '@/components/Group.vue'
export default {
  components: {
    Contain,
    Group
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
    ],
    items: [
      {
        src:
          'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba'
      },
      {
        src: 'http://getwallpapers.com/wallpaper/full/0/3/9/254241.jpg'
      },
      {
        src: 'https://wallpapersite.com/images/pages/pic_w/15333.jpg'
      }
    ]
  })
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
