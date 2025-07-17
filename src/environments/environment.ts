// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const environment = {
  firebase: {
    apiKey: "AIzaSyBAjZIJobO3KpIYuQMJ5D9y6Wwfvvk-OHE",
    authDomain: "friendlychat-15567.firebaseapp.com",
    projectId: "friendlychat-15567",
    storageBucket: "friendlychat-15567.appspot.com",
    messagingSenderId: "511919141787",
    appId: "1:511919141787:web:dd00faffe2469053fce73e"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);