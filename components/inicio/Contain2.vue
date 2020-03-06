<template>
  <v-container>
    <v-row justify="">
      <h1 class="pl-5 ml-5 pb-5">{{ titulo }}</h1>
    </v-row>
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
    titulo: 'Arte Gigital'
  }),
  computed: {
    galerias() {
      return this.$store.state.artedigital.galerias
    }
  },
  methods: {
    verProyecto(i) {
      this.$store.dispatch('artedigital/proyectoActual', i)
      this.$router.push('artedigital')
    }
  }
}
</script>

<style scoped>
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
</style>
