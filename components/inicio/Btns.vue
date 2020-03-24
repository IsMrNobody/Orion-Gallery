<template>
  <div>
    <v-row justify="center">
      <v-toolbarIcon class="logo">
        <img src="logorion.png" alt="logo" class="ma-5 log" />
      </v-toolbarIcon>
    </v-row>
    <v-row justify="center">
      <v-toolbarTitle class="botones ma-5">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :to="icon.to"
          text
          class="bor mx-4"
        >
          {{ icon.name }}
        </v-btn>
      </v-toolbarTitle>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: 'Alnilam',
        to: '/gallery'
      },
      {
        name: 'Alnitak',
        to: '/artedigital'
      },
      {
        name: 'Mintaka',
        to: '/diseños'
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
.bor:hover {
  border: 0.6px solid #a921b6;
}
.botones {
  font-family: 'aladin, cusive';
  z-index: 1;
  animation: bot 6s;
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
