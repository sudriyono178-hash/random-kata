import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEHnrSuOqZ-i1tc9N1zE0gInTlVrhCH_E",
  authDomain: "random-kosakata.firebaseapp.com",
  projectId: "random-kosakata",
  storageBucket: "random-kosakata.firebasestorage.app",
  messagingSenderId: "268677262481",
  appId: "1:268677262481:web:5a4bd59899a91fd6772330",
  measurementId: "G-J0ZKJ18Q7T"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  db,
  provider,
  signInWithPopup,
  signOut,
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  getDoc
};
