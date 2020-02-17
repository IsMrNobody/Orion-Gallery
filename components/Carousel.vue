<template>
  <v-carousel hide-delimiters show-arrows-on-hover cycle vertical>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      touch
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
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
    }
  }
}
</script>
