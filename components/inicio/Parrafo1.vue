<template>
  <div>
    <v-col pa-5 pl-5 ma-5>
      <div class="text-center hidden-sm-and-up">
        <h2>Desde las constelaciones</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita
          hic dicta cum facilis ex asperiores sit dolorem neque maiores rem
          adipisci sint tempora blanditiis, tenetur et similique unde culpa.
        </p>
      </div>
    </v-col>
    <div class="ma-5 text-center hidden-xs-only">
      <v-row justify="center">
        <div class="display-3">
          <v-icon>mdi-star-four-points</v-icon>
          <v-icon>mdi-star-four-points</v-icon>
          <v-icon>mdi-star-four-points</v-icon>
        </div>
        <p class="pad text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui dolor
          quos, dolores ipsum voluptatem impedit odit laboriosam accusamus
          asperiores velit esse consequatur vitae, sunt inventore fugit
          dignissimos hic dolorum.
        </p>
      </v-row>
    </div>
    <Paral />
  </div>
</template>

<script>
import Paral from '@/components/inicio/Paral.vue'
export default {
  components: {
    Paral
  }
}
</script>

<style scoped>
.pad {
  margin: 4% 4%;
  padding: 4%;
  font-size: 30px;
}
</style>
