export const state = () => ({
  proyectoActual: {
    titulo: '',
    subtitulo: '',
    src: '',
    link: '',
    slider: []
  },
  galerias: [
    {
      titulo: 'Instagram',
      subtitulo: 'info',
      src:
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/BannerC_3.png?alt=media&token=bb127bc2-f610-49ea-a404-8465755f5a43',
      link: 'gallery',
      slider: [
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba',
        'https://firebasestorage.googleapis.com/v0/b/orion-gallery-116f8.appspot.com/o/bg-web.jpg?alt=media&token=dc8b7769-e8f6-4f65-9bb1-18261ec1d7ba'
      ]
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg',
      link: '/',
      slider: ['http://getwallpapers.com/wallpaper/full/0/3/9/254241.jpg']
    },
    {
      titulo: 'Facebook',
      subtitulo: 'hola',
      src: 'foto.jpg',
      link: '/',
      slider: ['https://wallpapersite.com/images/pages/pic_w/15333.jpg']
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
