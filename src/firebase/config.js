// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPys51simEjw-_uliIjKhWPBpGaPnXEYQ",
  authDomain: "react-cursos-99468.firebaseapp.com",
  projectId: "react-cursos-99468",
  storageBucket: "react-cursos-99468.appspot.com",
  messagingSenderId: "54723452602",
  appId: "1:54723452602:web:82aa8c9ec176ee575e6c83"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp )

export const FirebaseDB = getFirestore( FirebaseApp )