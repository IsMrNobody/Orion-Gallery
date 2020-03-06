<template>
  <div justify="center">
    <Entrada />
  </div>
</template>

<script>
import Entrada from '@/components/inicio/Entrada.vue'
export default {
  components: {
    Entrada
  },
  layout: 'intro'
}
</script>

<style scoped>
.bg {
  background-image: linear-gradient(rgb(0, 0, 0), rgb(27, 2, 22));
}
</style>
