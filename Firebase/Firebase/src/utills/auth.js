import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
 } from "firebase/auth";
 import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
 import { getApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBH5CDqRWBIcivcTw99PIOr9lU4fRR0LtM",
  authDomain: "reactfirebase-510b0.firebaseapp.com",
  projectId: "reactfirebase-510b0",
  storageBucket: "reactfirebase-510b0.appspot.com",
  messagingSenderId: "232980290185",
  appId: "1:232980290185:web:f1707e5e5bedc22ec88458",
  measurementId: "G-M1JTNEEPE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storage, 'images');

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    app,
    storage,
    ref,
    storageRef,
    imagesRef,
    uploadBytes,
    getDownloadURL
}