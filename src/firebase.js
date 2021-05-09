// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBYpEDJRpbv4UD1nY6qxHBhFyLrLuimXBM",
    authDomain: "clone-82cc6.firebaseapp.com",
    projectId: "clone-82cc6",
    storageBucket: "clone-82cc6.appspot.com",
    messagingSenderId: "323985643118",
    appId: "1:323985643118:web:fa1df2467dbf3c40a0f87f",
    measurementId: "G-LWS7NC4MRX"
  };
  const firebaseApp=  firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};