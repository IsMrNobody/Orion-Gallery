<template>
  <div>
    <v-row justify="center">
      <h2>titulo del contenido</h2>
    </v-row>
    <v-row>
      <v-col v-for="(cartel, i) in carteles" :key="i" ma-5>
        <v-img :src="`${cartel.src}`" max-width="400px" class="memory">
          <Paral2 />
        </v-img>
      </v-col>
      <p class="text-center alegreya pad">
        Lorem2 ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        autem, repellendus maxime ea iure necessitatibus voluptatibus cum harum
        ab repellat sapiente dolore amet unde corrupti suscipit voluptatem eius
        recusandae voluptate.
      </p>
    </v-row>
  </div>
</template>

import Botones from '@/layouts/Botones.vue'
<script>
import Paral2 from '@/components/inicio/Paral2.vue'
export default {
  components: {
    Paral2
  },
  data: () => ({
    carteles: [
      {
        // src: 'icon.png',
        titulo: 'Foto1'
      },
      {
        src: 'foto.jpg',
        titulo: 'Foto2'
      },
      {
        // src: 'icon.png'
        titulo: 'Foto3'
      }
    ]
  })
}
</script>

<style scoped>
.memory {
  height: 200px;
  transition: 0.4s;
  background-image: radial-gradient(rgb(65, 15, 105), rgb(0, 0, 0));
}
.memory:hover {
  padding-top: 200px;
}
.pad {
  margin: 4% 4%;
  font-size: 30px;
}
</style>
