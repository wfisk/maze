import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import { authState } from 'rxfire/auth';

import config from '../config/firebase.json';

firebase.initializeApp( config );

// Cloud Firestore cls
export const cfs = firebase.firestore();

// Firebase Auth fba
// 
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithPopup = () => auth.signInWithPopup( googleProvider );
// see https://fireship.io/lessons/svelte-v3-overview-firebase/
// export const unsubscribe = authState(auth).subscribe(u => user = u);

// for debugging
window.firebase = firebase;