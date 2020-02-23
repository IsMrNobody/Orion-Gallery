export const state = () => ({
  proyectoActual: {
    titulo: '',
    subtitulo: '',
    src: '',
    link: '',
    slider: [
      'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/banners%2Fbuho.png?alt=media&token=47a9802f-717b-47f0-ba34-7bc13953b237'
    ]
  },
  galerias: [
    {
      titulo: 'Naturaleza',
      subtitulo: 'Tigre, Colibri, Naturaleza',
      src:
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fportada.png?alt=media&token=367c3e7a-d07e-4734-be01-723f7b94d70b',
      link: 'gallery',
      group: [
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fcard.png?alt=media&token=96cd7797-a3bb-4656-bb99-7e0c0dd9c124'
      ],
      slider: [
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Famplio.png?alt=media&token=a0974210-7bfb-4ae2-a361-fb949ab53b9e',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fbuho.png?alt=media&token=7abdb757-8fc7-4909-92b7-e5f4de02f31e',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/Galeria%2Fproyectos%2F01%2Fpinta.png?alt=media&token=54927b16-f256-4aaa-8117-6e30d7a629c3'
      ]
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg',
      link: '/',
      group: ['foto.jpg'],
      slider: [
        'https://s.yimg.com/ny/api/res/1.2/7m7C7BCNcZ_QNZTtp1zIRw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjcwO2g9Mzc3/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-06/24f3a010-8daf-11e9-a2a8-d153b2282d54'
      ]
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg',
      link: '/',
      group: ['foto.jpg'],
      slider: ['foto.jpg']
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg',
      link: '/',
      group: ['foto.jpg'],
      slider: [
        'https://s.yimg.com/ny/api/res/1.2/7m7C7BCNcZ_QNZTtp1zIRw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjcwO2g9Mzc3/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-06/24f3a010-8daf-11e9-a2a8-d153b2282d54'
      ]
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg',
      link: '/',
      group: ['foto.jpg'],
      slider: ['foto.jpg']
    }
  ]
})

export const mutations = {
  asignarProyecto(state, i) {
    state.proyectoActual = state.galerias[i]
  }
}

export const actions = {
  proyectoActual({ commit }, i) {
    commit('asignarProyecto', i)
  }
}
