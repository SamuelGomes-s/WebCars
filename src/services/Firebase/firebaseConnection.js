import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGGQ5xaUVdhp5MJ-p9Ak3llveY0UZ6iAA",
    authDomain: "webcars-90e0b.firebaseapp.com",
    projectId: "webcars-90e0b",
    storageBucket: "webcars-90e0b.firebasestorage.app",
    messagingSenderId: "790839946089",
    appId: "1:790839946089:web:5430f0034ac27d9942abf8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export{
    db,
    auth,
    storage
}