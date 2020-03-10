<template>
<<<<<<< HEAD
  <div>
    <!-- <Lottie :options="defaultOptions" /> -->
    <v-row column justify="center">
      <v-col cols="6">
        <v-text-field v-model="correo" hint="Tu Correo"></v-text-field>
        <v-text-field v-model="clave" hint="Tu Clave"></v-text-field>
        <v-btn @click="animationView" type="submit" color="violet" flat ripple>
          Enviar
        </v-btn>
      </v-col>
    </v-row>
  </div>
=======
  <v-row column justify="center">
    <v-col cols="6">
      <v-text-field v-model="correo" hint="Tu Correo"></v-text-field>
      <v-text-field v-model="clave" hint="Tu Clave"></v-text-field>
      <v-btn @click="registrar" type="submit" color="violet" text ripple>
        Enviar
      </v-btn>
    </v-col>
  </v-row>
>>>>>>> 8314d09bb1e890d9c80bde75cc4e4f944393b0f6
</template>

<script>
// import Lottie from '@/components/Lottie.vue'

import * as animationData from '@/assets/dataa.json'

export default {
  components: {
    // Lottie
  },
  data: () => ({
    clave: '', // ok como ahora tienes estas variables aqui y estas capturando lo
    correo: '', // campos de texto, entonces ahora los llamamos dentro del metodo
    defaultOptions: { animationData }
  }),
  methods: {
    registrar() {
      const payload = {
        // tenemos que armar este objeto con los contenidos de clave y correo
        password: this.clave, // para pasarselo al metodo registrar
        email: this.correo // fino panal ahora si entiendo un poco mas el asunto
      }
      this.$store.dispatch('auth/signUp', payload) // pilla estamos enviando este objeto
    } // ok nos vamos al ootro archivo de la tienda... ya por aqui terminamos
  }
}
</script>
