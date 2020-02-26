<template>
  <v-dialog v-model="dialog" max-width="380px">
    <template v-slot:activator="{ on }">
      <v-col v-for="(unico, i) in unicos" :key="i">
        <v-row>
          <v-card class="mx-auto tarjeta elevation-10" max-width="250px">
            <v-img
              :src="unico.src"
              :alt="unico.titulo"
              v-on="on"
              class="white--text align-end"
              height="300px"
              width="100%"
            >
              <v-card-title>{{ unico.titulo }}</v-card-title>
            </v-img>

            <v-card-subtitle class="text-left pb-0">{{
              unico.subtitulo
            }}</v-card-subtitle>

            <v-card-actions> </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </template>

<!-- El "src" no funciona aqui abajo en "img" -->

    <v-card flat class="black">
      <v-img :src="unicos.src" aspect-ratio="1" />
      <!-- <v-card-title>
        <span class="headline">title</span>
      </v-card-title>
      <v-card-text>
        <hr color="red" />
        <p>Descrip</p>
      </v-card-text> -->
      <v-card-actions>
        <v-btn @click="dialog = false" color="orange" text>
          Regresar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  computed: {
    unicos() {
      return this.$store.state.unicos.unidad
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.2em;
}
.tarjeta {
  background-color: black;
  opacity: 0.6;
  transition: 0.8s;
}
.tarjeta:hover {
  opacity: 1;
}
</style>
