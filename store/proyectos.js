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
      src:
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fportada.png?alt=media&token=367c3e7a-d07e-4734-be01-723f7b94d70b',
      group: [
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fcard.png?alt=media&token=96cd7797-a3bb-4656-bb99-7e0c0dd9c124'
      ],
      slider: [
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fpinta.png?alt=media&token=54927b16-f256-4aaa-8117-6e30d7a629c3',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fpinta_3.png?alt=media&token=2c8780b3-6eee-4508-b6c4-b05a244dd9bf',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fpinta_4.png?alt=media&token=7e3430cb-f44f-4fc4-bd83-c02ca73bb466'
      ]
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg',
      group: ['foto.jpg'],
      slider: ['foto.jpg']
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg',
      group: ['v.png'],
      slider: ['foto.jpg']
    }
  ],
  galerias2: [
    {
      group: [
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fcard.png?alt=media&token=96cd7797-a3bb-4656-bb99-7e0c0dd9c124'
      ],
      slider: [
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fpinta.png?alt=media&token=54927b16-f256-4aaa-8117-6e30d7a629c3',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fpinta_3.png?alt=media&token=2c8780b3-6eee-4508-b6c4-b05a244dd9bf',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fpinta_4.png?alt=media&token=7e3430cb-f44f-4fc4-bd83-c02ca73bb466'
      ]
    },
    {
      group: ['foto.jpg'],
      slider: ['foto.jpg', 'v.png']
    },
    {
      group: ['v.png'],
      slider: ['foto.jpg']
    },
    {
      group: ['v.png'],
      slider: ['foto.jpg']
    },
    {
      group: ['v.png'],
      slider: ['foto.jpg']
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
