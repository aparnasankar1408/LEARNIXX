// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyArFJw7BzXPTpwld9oNtXXRKlSHasYyMS8",
  authDomain: "learnix-e04e5.firebaseapp.com",
  projectId: "learnix-e04e5",
  storageBucket: "learnix-e04e5.firebasestorage.app",
  messagingSenderId: "542441509489",
  appId: "1:542441509489:web:2dce3c3740e112cbae81d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
};