import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAeYTPcKdE_Lw6YZTADjaauYJAY3d1_ahs",
    authDomain: "productivity-app-c0492.firebaseapp.com",
    databaseURL: "https://productivity-app-c0492.firebaseio.com",
    projectId: "productivity-app-c0492",
    storageBucket: "productivity-app-c0492.appspot.com",
    messagingSenderId: "359720528205",
    appId: "1:359720528205:web:797ae9df23b56698236f04",
    measurementId: "G-F2Y4M5HQ34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export {firebaseConfig as firebase}