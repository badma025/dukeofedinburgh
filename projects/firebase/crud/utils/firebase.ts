import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC26TYe1DGcupHvJE4NMnPJfx12ZSFaNZc',
  authDomain: 'crud-22e47.firebaseapp.com',
  projectId: 'crud-22e47',
  storageBucket: 'crud-22e47.appspot.com',
  messagingSenderId: '793960530811',
  appId: '1:793960530811:web:388c9e417a98c34337b3de',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
