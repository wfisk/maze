import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAV2nZILUc7VeMUYIYbspEsRHq4iRzCMgU",
  authDomain: "svelte-start.firebaseapp.com",
  databaseURL: "https://svelte-start.firebaseio.com",
  projectId: "svelte-start",
  storageBucket: "svelte-start.appspot.com",
  messagingSenderId: "849968363816",
  appId: "1:849968363816:web:bdbd664be131cd60"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// export const db = firebase.firestore();
export const firestore = firebase.firestore();

// for debugging
window.firebase = firebase;

