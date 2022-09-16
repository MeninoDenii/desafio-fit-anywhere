import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getDatabase } from "firebase/database";

interface firebaseConfigProps {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: firebaseConfigProps = {
  apiKey: "AIzaSyBCLFpwqFmIqb9hL2_hGUQ8ZdFOjn5MgHY",
  authDomain: "desafio-fit.firebaseapp.com",
  projectId: "desafio-fit",
  storageBucket: "desafio-fit.appspot.com",
  messagingSenderId: "1006272565412",
  appId: "1:1006272565412:web:25c5452597b534b4305631",
  measurementId: "G-VRRVLFW5T2",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, db, auth, firestore };
