<template>
  <v-layout row justify-center class="color">
    <v-flex v-for="(galeria, i) in galerias" :key="i" xs12 sm6 md3 ma-5>
      <a :href="`${galeria.link}`" target="_blank" class="decoration">
        <v-card class="mx-auto tarjeta elevation-10" max-width="350px">
          <v-img
            :src="`${galeria.src}`"
            :alt="galeria.titulo"
            class="white--text align-end"
            height="300px"
            width="100%"
          >
            <v-card-title>{{ galeria.titulo }}</v-card-title>
          </v-img>

          <v-card-subtitle class="text-left pb-0">{{
            galeria.subtitulo
          }}</v-card-subtitle>

          <v-card-text class="text--primary text-left">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn nuxt="gallery" color="orange" text>
              Ver
            </v-btn>

            <!-- <v-btn color="orange" text>
              Explore
            </v-btn> -->
          </v-card-actions>
        </v-card>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    galerias: [
      {
        titulo: 'Instagram',
        subtitulo: 'info',
        src: 'icon.png',
        link: 'gallery'
      },
      {
        titulo: 'Facebook',
        subtitulo: 'hola',
        src: 'foto.jpg',
        link: '/'
      },
      {
        titulo: 'Facebook',
        subtitulo: 'hola',
        src: 'foto.jpg',
        link: '/'
      },
      {
        titulo: 'Facebook',
        subtitulo: 'hola',
        src: 'foto.jpg',
        link: '/'
      },
      {
        titulo: 'Instagram',
        subtitulo: 'info',
        src: 'foto.jpg',
        link: '/'
      },
      {
        titulo: 'Facebook',
        subtitulo: 'hola',
        src: 'foto.jpg',
        link: '/'
      },
      {
        titulo: 'Facebook',
        subtitulo: 'hola',
        src: 'foto.jpg',
        link: '/'
      },
      {
        titulo: 'Facebook',
        subtitulo: 'hola',
        src: 'foto.jpg',
        link: '/'
      },
      {
        titulo: 'Facebook',
        subtitulo: 'hola',
        src: 'foto.jpg',
        link: '/'
      }
    ]
  })
}
</script>

<style scoped>
.fotos {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 20px;
  width: 20px;
}
.titulo {
  text-align: center;
  text-decoration: none;
  text-decoration-line: none;
}
.decoration {
  text-align: center;
  text-decoration: none;
  text-decoration-line: none;
}
.ciudad {
  text-align: center;
}
.eventos {
  text-align: center;
}
.tarjeta {
  background-color: black;
  opacity: 0.6;
  transition: 0.8s;
}
.tarjeta:hover {
  opacity: 1;
  margin-top: -5%;
}
</style>
