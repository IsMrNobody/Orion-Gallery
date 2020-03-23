<template>
  <v-container>
    <h1 class="pl-2 ml-3 pb-4">
      <v-icon class="ho">mdi-star-four-points</v-icon>
      {{ titulo }}
    </h1>
    <h2 class="pl-5 ml-5">{{ sub }}</h2>
    <h3 class="pl-5 ml-5 mb-4">{{ des }}</h3>
    <v-row>
      <v-col v-for="(galeria, i) in galerias" :key="i">
        <v-card class="mx-auto tarjeta elevation-10" max-width="350px">
          <v-img
            :src="galeria.src"
            :alt="galeria.titulo"
            class="white--text align-end"
            height="300px"
            width="100%"
          >
          </v-img>

          <v-card-title>{{ galeria.titulo }}</v-card-title>

          <v-card-subtitle class="text-left pb-0">{{
            galeria.subtitulo
          }}</v-card-subtitle>

          <v-card-actions>
            <v-btn @click="verProyecto(i)" color="orange" text>
              Ver
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    titulo: 'Mintaka',
    sub: 'Diseño Gráfico',
    des:
      'Contribuimos con la creación de identidades coorporativas de marcas con visión del nuevo mundo'
  }),
  computed: {
    galerias() {
      return this.$store.state.diseños.galerias
    }
  },
  methods: {
    verProyecto(i) {
      this.$store.dispatch('diseños/proyectoActual', i)
      this.$router.push('/diseños')
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
  opacity: 0.6;
  transition: 0.8s;
  background-color: black;
}
.tarjeta:hover {
  opacity: 1;
  margin-top: -5%;
}
h1 {
  transition: 1s;
  font-size: 2.5em;
  color: #3f85ee;
}
h1:hover {
  letter-spacing: 10px;
}
h2 {
  font-size: 3em;
}
h3 {
  font-size: 2em;
}
</style>
