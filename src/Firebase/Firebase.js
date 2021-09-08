import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0BmwgvXidfa0MR3Wk1UfPt14b85xONH0",
  authDomain: "product-verification-sys-ab74b.firebaseapp.com",
  projectId: "product-verification-sys-ab74b",
  storageBucket: "product-verification-sys-ab74b.appspot.com",
  messagingSenderId: "100663532783",
  appId: "1:100663532783:web:bb8ba85e6287aa0748cf1a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();