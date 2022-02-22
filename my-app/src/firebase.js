import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEJ8DZefE4hHGtrZ_Li5PXQdaiTKVeJxU",
  authDomain: "handbreaker-c0d95.firebaseapp.com",
  projectId: "handbreaker-c0d95",
  storageBucket: "handbreaker-c0d95.appspot.com",
  messagingSenderId: "269911436972",
  appId: "1:269911436972:web:59fb6bb32baa79903af909",
  measurementId: "G-FKFYEXPXK7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export { firebaseApp, db };