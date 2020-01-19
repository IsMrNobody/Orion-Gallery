<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="foto">
        <v-img
          width="100vw"
          height="400px"
          src="https://cdn.mos.cms.futurecdn.net/reaVPYbHtVWG8WHFPrgdvB.jpg"
        >
          <v-layout pa-5>
            <div class="pad2">
              <h1 class="text-left">Orion Gallery</h1>
              <h2 class="text-left">Desde las constelaciones</h2>
            </div>
            <vSpacer />
            <vToolbarTitle> Inicio </vToolbarTitle>
            <vSpacer />
            <vToolbarTitle> Gallery </vToolbarTitle>
            <vSpacer />
            <vToolbarTitle> Contacto </vToolbarTitle>
            <!-- <div>
              <h3 class="text-right">inicio</h3>
              <h3 class="text-right">gallery</h3>
              <h3 class="text-right">contacto</h3>
            </div> -->
          </v-layout>
          <h2 class="text-center pad">Galleria de arte y diseño</h2>
        </v-img>
      </div>
    </v-flex>
  </v-layout>
</template>

<style scoped>
h3 {
  /* margin-right: 80px; */
  margin-top: 20px;
}
.pad {
  /* padding: 20px; */
  padding-top: 100px;
}
.pad2 {
  padding-top: 80px;
}
</style>
