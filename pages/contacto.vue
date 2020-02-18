<template>
  <v-row column justify="center">
    <v-col cols="6">
      <v-text-field v-model="correo" hint="Tu Correo"></v-text-field>
      <v-text-field v-model="clave" hint="Tu Clave"></v-text-field>
      <v-btn @click="registrar" type="submit" color="violet" flat ripple>
        Enviar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    clave: '',
    correo: ''
  }),
  methods: {
    registrar() {
      this.$store.dispatch('auth/signUp', this.clave)
    }
  }
}
</script>
