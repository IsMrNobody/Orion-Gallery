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
            <v-tooltip
              :color="item.color"
              right
              text
              transition="slide-x-transition"
            >
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" class="ho">{{ item.icon }}</v-icon>
              </template>
              <h1>{{ item.title }}</h1>
            </v-tooltip>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed flat app color="transparent">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
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
          to: 'home',
          title: 'Inicio',
          color: '#191524',
          icon: 'mdi-star-four-points'
        },
        {
          to: '/gallery',
          title: 'Alnilam',
          color: '#191524',
          alt: 'Galeria',
          icon: 'mdi-star-four-points'
        },
        {
          color: '#191524',
          to: '/artedigital',
          title: 'Alnitak',
          icon: 'mdi-star-four-points'
        },
        {
          to: '/diseños',
          title: 'Mintaka',
          color: '#191524',
          icon: 'mdi-star-four-points'
        }
      ],
      right: true,
      miniVariant: false,
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
.ho:hover {
  color: rgba(248, 36, 255, 0.568);
}
.ble {
  filter: opacity(0.2);
}
h1 {
  border-style: solid 1px;
}
</style>
