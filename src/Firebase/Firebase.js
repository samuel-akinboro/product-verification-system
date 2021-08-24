import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqllHCanwTL0OR_o3x3wsPAIma3BFovo8",
    authDomain: "diary-a76a9.firebaseapp.com",
    projectId: "diary-a76a9",
    storageBucket: "diary-a76a9.appspot.com",
    messagingSenderId: "419827492357",
    appId: "1:419827492357:web:a40f814744fa73f0c99e6c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export const db = firebase.firestore();