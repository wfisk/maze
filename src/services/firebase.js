import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { authState } from 'rxfire/auth';

import config from 'src/config/firebase.json';
import currentUser from 'src/stores/current-user.js';

firebase.initializeApp( config );

// Cloud Firestore cls
export const firestore = firebase.firestore();

// Firebase Auth fba
// 
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithPopup = () => auth.signInWithPopup( googleProvider );



// see https://fireship.io/lessons/svelte-v3-overview-firebase/
export const unsubscribe = authState( auth ).subscribe( it => currentUser.set( it ) );

export function signOut(){
  auth.signOut();
}

// for debugging
window.firebase = firebase;