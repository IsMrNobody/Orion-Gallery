<template>
  <v-container>
    <v-row>
      <v-col v-for="(galeria, i) in galerias" :key="i">
        <v-card class="mx-auto tarjeta elevation-10" max-width="350px">
          <!-- <a :href="`${galeria.link}`" target="_blank" class="decoration"> -->
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
            <nuxt-link to="gallery">
              <v-btn color="orange" text>
                Ver
              </v-btn>
            </nuxt-link>

            <!-- <v-btn color="orange" text>
                  Explore
                </v-btn> -->
          </v-card-actions>
          <!-- </a> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    galerias: [
      {
        titulo: 'Instagram',
        subtitulo: 'info',
        src:
          'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/BannerC_3.png?alt=media&token=bb127bc2-f610-49ea-a404-8465755f5a43',
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
