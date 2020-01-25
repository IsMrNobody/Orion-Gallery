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
            'http://www.graciaviva.cat/png/big/18/180282_star-background-images.jpg'
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
