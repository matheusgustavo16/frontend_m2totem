import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoyXO3rbsLjOl_Bj11FH50yqMDchn2vj4",
  authDomain: "m2totem.firebaseapp.com",
  projectId: "m2totem",
  storageBucket: "m2totem.appspot.com",
  messagingSenderId: "659305556594",
  appId: "1:659305556594:web:d5c9f6dd4daff2e9baf0eb"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { app, db, storage, auth };
