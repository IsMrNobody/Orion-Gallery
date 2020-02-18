import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/messaging'

if (!firebase.apps.length) {
  // objeto de configuracion con credenciales
  const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  }

  // aqui inicializas firebase y le pasas el objeto config con las credenciales
  firebase.initializeApp(config) // <= AQUI PASAS LAS CREDENCIALES

  // aqui configuras la autenticacion de usuario para que sea en espanol.
  firebase.auth().languagueCode = 'es'
}

// Aqui exportas auth, DB y Storage.
export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
