<template>
  <v-container>
    <v-row justify="center">
      <v-toolbarIcon class="logo">
        <img src="logorion.png" alt="logo" class="log" />
      </v-toolbarIcon>
    </v-row>
    <v-row justify="center">
      <v-toolbarTitle
        v-for="icon in icons"
        :key="icon"
        class="botones mx-2 mt-5"
      >
        <v-tooltip color="transparent" bottom transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-btn :to="icon.to" :color="icon.color" v-on="on" text class="bor">
              {{ icon.name }}
            </v-btn>
          </template>
          <h4 class="op">{{ icon.bot }}</h4>
        </v-tooltip>
      </v-toolbarTitle>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: 'Alnilam',
        to: '/gallery',
        color: '#03a9f4',
        bot: 'Arte'
      },
      {
        name: 'Alnitak',
        to: '/artedigital',
        color: '#ba33d2',
        bot: 'Digital'
      },
      {
        name: 'Mintaka',
        to: '/diseños',
        color: '#6e3fee',
        bot: 'Diseño'
      }
    ]
  })
}
</script>

<style scoped>
.bor:before {
  content: '';
  display: block;
  position: absolute;
  background: blueviolet;
  width: 100%;
}
.bor {
  opacity: 0.8;
  transition: 0.6s;
}
.bor:hover {
  opacity: 1;
}
.botones {
  font-family: 'aladin, cusive';
  z-index: 1;
  animation: bot 6s;
}
.op {
  opacity: 0.8;
}

@keyframes bot {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.logo {
  z-index: 1;
}
.log {
  width: 90vw;
  max-width: 450px;
  animation: log 3s;
}

@keyframes log {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
