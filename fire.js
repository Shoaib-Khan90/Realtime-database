import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  serverTimestamp,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIBVVl1-qah5qPAns6ULaO8QmjfcnugiA",
  authDomain: "ecommerce-7f1e2.firebaseapp.com",
  projectId: "ecommerce-7f1e2",
  storageBucket: "ecommerce-7f1e2.firebasestorage.app",
  messagingSenderId: "1090647740235",
  appId: "1:1090647740235:web:97a023e4b6638f1c7022ce",
  measurementId: "G-JE0WY3T385",
  databaseURL: "https://ecommerce-7f1e2-default-rtdb.firebaseio.com/"
};

export {
  firebaseConfig,
  initializeApp,
  getDatabase,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  serverTimestamp,
  deleteDoc,
  ref,
  set,
};