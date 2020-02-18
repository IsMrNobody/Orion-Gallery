import Cookie from 'js-cookie' // libreria para manejo de cookies
import { auth, db } from '@/plugins/firebase'

// estado de la aplicacion
export const state = () => ({
  user: null,
  token: null
})

// getters que llaman informacion desde la tienda hacia los componentes
export const getters = {
  currentUser: (state) => state.user
}

// mutaciones de el estado (cambios de estado sincronos invocados por acciones)
export const mutations = {
  setToken: (state, token) => (state.token = token),
  clearToken: (state) => (state.token = null),
  setUser: (state, user) => (state.user = user),
  clearUser: (state) => (state.user = null)
}

// acciones para ejecutar codigo asyncrono e invocar mutaciones de estado
export const actions = {
  // Inicializando la autenticacion, verificamos existencia de token no caducado
  initAuth({ commit }, req) {
    // se inician las variables vacias para que el compilador no se queje
    let token
    let userId
    // se verifica si la accion esta corriendo en el servidor o en el cliente
    if (req) {
      // se verifica si no hay headers con cookies
      if (!req.headers.cookie) {
        return // en el caso que no hayan cookies, la funcion termina
      }
      // en caso que hayan cookies en los headers, asignarlos a jwtCookie
      const jwtCookie = req.headers.cookie
        .split(`;`)
        .find((c) => c.trim().startsWith('idToken='))
      if (!jwtCookie) {
        return // si jwtCookie es null o undefined la funcion termina
      }
      // asignar el tiempo de expiracion
      // tomar el token desde el cookie
      token = jwtCookie.split('=')[1]
      userId = req.headers.cookie
        .split(`;`)
        .find((c) => c.trim().startsWith('idUser='))
        .split(`=`)[1]
    } else {
      // tomar el token del storage del navegador
      token = localStorage.getItem('idToken')
      userId = localStorage.getItem('idUser')
    }
    db.collection('users')
      .doc(`${userId}`)
      .get()
      .then((res) => {
        const newUser = {
          id: res.id,
          name: res.data().name,
          email: res.data().email,
          photoUrl: res.data().photoUrl,
          isAdmin: res.data().isAdmin,
          isMerchant: res.data().isMerchant,
          merchantId: res.data().merchantId
        }
        commit('setUser', newUser)
        commit('setToken', token)
      })
      .catch((err) => {
        alert(err.message)
      })
  },
  // registro de usuarios
  signUp({ commit }, payload) {
    auth
      .createUserWithEmailAndPassword(`${payload.email}`, `${payload.password}`)
      .then((res) => {
        db.collection('users')
          .doc(`${res.user.uid}`)
          .set({
            name: `${payload.name}`,
            email: `${payload.email}`
          })
          .then(() => alert('Usuario Creado!'))
          .catch((err) => alert(err.message))
        const newUser = {
          id: res.user.uid,
          name: `${payload.name}`,
          email: `${payload.email}`
        }
        commit('setToken', res.user.ra)
        commit('setUser', newUser)
        localStorage.setItem('idToken', res.user.ra)
        localStorage.setItem('idUser', res.user.uid)
        Cookie.set('idToken', res.user.ra)
        Cookie.set('idUser', res.user.uid)
        this.$router.push('/panel')
        alert(`Bienvenido a Orion Gallery`)
      })
      .catch((err) => {
        alert(err)
      })
  },
  signIn({ commit }, payload) {
    auth
      .signInWithEmailAndPassword(`${payload.email}`, `${payload.password}`)
      .then((res) => {
        // Guardamos JWT token en vuex
        commit('setToken', res.user.ra)
        // Agarramos FCM token desde las cookies del navegador y
        // lo guardamos en el perfil de usario en firestore
        const tokenFCM = Cookie.get('tokenFCM')
        db.collection('users')
          .doc(`${res.user.uid}`)
          .set({ tokenFCM }, { merge: true })
        // pedimos el perfil de usuario desde Firestore
        db.collection('users')
          .doc(`${res.user.uid}`)
          .get()
          .then((user) => {
            const loggedUser = {
              id: user.id,
              name: user.data().name,
              email: user.data().email,
              photoUrl: user.data().photoUrl,
              isAdmin: user.data().isAdmin,
              isMerchant: user.data().isMerchant,
              merchantId: user.data().merchantId,
              tokenFCM
            }
            // guardamos perfil de usuario en vuex
            commit('setUser', loggedUser)
            // si el usuario es mercante, redireccionamos a panel
            if (user.data().isMerchant) {
              this.$router.push('/panel/merchant')
              db.collection('merchants')
                .doc(user.data().merchantId)
                .set({ merchantFCM: tokenFCM }, { merge: true })
            } else {
              // si el usuario no es mercante redireccionamos a pagina principal
              this.$router.push('/')
            }
          })
          .catch((err) => alert(err.message))
        // guardamos el JWT token y user ID en local storage
        localStorage.setItem('idToken', res.user.ra)
        localStorage.setItem('idUser', res.user.uid)
        // guardamos JWT token y user ID en cookies
        Cookie.set('idToken', res.user.ra)
        Cookie.set('idUser', res.user.uid)
        // enviamos notificacion
        alert(`Jartate con gusto!`)
      })
      .catch((err) => {
        alert(`Lo sentimos, hubo un Error (${err.message})`)
      })
  },
  logout({ commit }) {
    this.$router.push('/')
    commit('clearToken')
    commit('clearUser')
    Cookie.remove('idToken')
    Cookie.remove('idUser')
    if (process.client) {
      localStorage.removeItem('idToken')
      localStorage.removeItem('idUser')
    }
  }
}
