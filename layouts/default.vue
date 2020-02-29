<template>
  <v-app dark class="bg">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      mini-variant
      fixed
      class="nav"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed flat app color="transparent">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn @click.stop="miniVariant = !miniVariant" icon>
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn @click.stop="clipped = !clipped" icon>
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn @click.stop="fixed = !fixed" icon>
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <!-- <v-btn @click.stop="rightDrawer = !rightDrawer" icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :fixed="fixed" color="black" app>
      <span>&copy; 2020</span>
    </v-footer>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/layouts/Footer.vue'
export default {
  components: {
    Footer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-star-four-points',
          title: 'Inicio',
          to: '/'
        },
        {
          icon: 'mdi-star-four-points',
          title: 'Gallery',
          to: '/gallery'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Orion Gallery'
    }
  }
}
</script>

<style scoped>
.bg {
  background-image: linear-gradient(rgb(0, 0, 0), rgb(27, 2, 22));
}
.nav {
  background-image: linear-gradient(rgb(16, 3, 27), rgb(0, 0, 0));
}
</style>
