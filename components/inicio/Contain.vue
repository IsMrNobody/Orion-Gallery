<template>
  <v-container>
    <h1 class="pl-2 ml-3 pb-4">
      <v-icon class="ho">mdi-star-four-points</v-icon>
      {{ titulo }}
    </h1>
    <h3 class="pl-5 ml-5 grey--text">{{ sub }}</h3>
    <h5 class="pl-5 ml-5 mb-4 display-1">{{ des }}</h5>
    <v-row>
      <v-col v-for="(galeria, i) in galerias" :key="i" cols>
        <v-card class="mx-auto black elevation-10" width="250" @click="verProyecto(i)">
          <v-img
            :src="galeria.src"
            :alt="galeria.titulo"
            class="white--text align-end tarjeta"
            height="150px"
          >
          </v-img>

          <v-card-title>{{ galeria.titulo }}</v-card-title>

          <v-card-subtitle class="text-left">{{
            galeria.subtitulo
          }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    titulo: 'Alnilam',
    sub: 'Piezas de Arte',
    des:
      'De la manera tradicional traemos tu visión a este plano fisico'
  }),
  computed: {
    galerias() {
      return this.$store.state.proyectos.galerias
    }
  },
  methods: {
    verProyecto(i) {
      this.$store.dispatch('proyectos/proyectoActual', i)
      this.$router.push('/gallery')
    }
  }
}
</script>

<style scoped>
.ho:hover {
  transform: rotate(180deg);
}
.fotos {
  width: 20px;
  height: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  /* opacity: 0.6; */
  transition: 0.6s;
  background-color: black;
}
.tarjeta:hover {
  /* opacity: 1; */
  margin-top: -5%;
}
h1 {
  color: #03a9f4;
  transition: 0.6s;
  font-size: 2.5em;
}
h1:hover {
  letter-spacing: 10px;
}
h2 {
  font-size: 3em;
}
</style>
