<template>
  <v-dialog v-model="dialog" max-width="600px">
    <!-- lo que esta dentro de template es lo que se ve por fuera del dialogo -->
    <template v-slot:activator="{ on }">
      <v-card class="mx-auto tarjeta elevation-10" max-width="250px">
        <v-img
          :src="elemento.src"
          :alt="elemento.titulo"
          v-on="on"
          class="white--text align-end"
          height="300px"
          width="100%"
        ></v-img>
        <v-card-title>{{ elemento.titulo }}</v-card-title>
        <v-card-subtitle class="text-left pb-0">
          {{ elemento.subtitulo }}
        </v-card-subtitle>
      </v-card>
    </template>

    <!-- y lo que esta fuera de template, esta dentro de el dialogo (suena loco no?) -->
    <!-- de aqui para abajo todo estara dentro del dialogo -->
    <v-card flat class="black">
      <v-img :src="elemento.src" />
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
  // aqui recibes los datos que le pasaste a v-dialog en el otro archivo
  props: {
    elemento: {
      // le especificas que es un objeto
      type: Object,
      // y que si no le pasas la informacion, se despliega con este relleno
      default: () => ({
        titulo: 'Orion Gallery',
        subtitulo: 'Orion Gallery',
        src:
          'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2Fload.png?alt=media&token=76fc1cd1-c036-4a97-9af8-0d66f6fc69d0'
      })
    }
  },
  data: () => ({
    dialog: false
  })
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
