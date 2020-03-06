export const state = () => ({
  proyectoActual: {
    titulo: '',
    subtitulo: '',
    src: '',
    link: '',
    slider: [
      'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Famplio.png?alt=media&token=a0974210-7bfb-4ae2-a361-fb949ab53b9e'
    ]
  },
  galerias: [
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg'
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg'
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg'
    }
  ],
  galerias2: [
    {
      group: ['foto.jpg'],
      slider: ['foto.jpg']
    },
    {
      group: ['foto.jpg'],
      slider: ['foto.jpg']
    },
    {
      group: ['orion.jpg'],
      slider: ['foto.jpg', 'orion.jpg']
    }
  ]
})

export const mutations = {
  asignarProyecto(state, i) {
    state.proyectoActual = state.galerias2[i]
  }
}

export const actions = {
  proyectoActual({ commit }, i) {
    commit('asignarProyecto', i)
  }
}
