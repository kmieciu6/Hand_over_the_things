import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCDa8nPAj6fMlEoj7wmUiKefwS-x-4E5-0",
    authDomain: "give-in-good-hands-add2b.firebaseapp.com",
    projectId: "give-in-good-hands-add2b",
    storageBucket: "give-in-good-hands-add2b.appspot.com",
    messagingSenderId: "590454050487",
    appId: "1:590454050487:web:e13120b3e7ab9457758732",
    measurementId: "G-FW4BTTK7LR"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
