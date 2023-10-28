import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjLLlE6CjmWJOqysWzI0oMmi3cL3phWVM",
  authDomain: "akasadev-9ebce.firebaseapp.com",
  projectId: "akasadev-9ebce",
  storageBucket: "akasadev-9ebce.appspot.com",
  messagingSenderId: "705252780298",
  appId: "1:705252780298:web:b1e139f571c99d64f8f2f3",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
