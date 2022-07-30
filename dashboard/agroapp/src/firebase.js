// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVE7swIvW7J4tfzF_ounnCW3D9knsmZOU",
  authDomain: "newproject-71dfb.firebaseapp.com",
  databaseURL: "https://newproject-71dfb-default-rtdb.firebaseio.com",
  projectId: "newproject-71dfb",
  storageBucket: "newproject-71dfb.appspot.com",
  messagingSenderId: "746601282925",
  appId: "1:746601282925:web:22e360c56cd24c2a8bae64",
  measurementId: "G-PR50QE8P9L"
});

// Initialize Firebase
const db = firebaseApp.firestore();
//const auth = firebase.auth();
//const analytics = getAnalytics(app);

export {db};

