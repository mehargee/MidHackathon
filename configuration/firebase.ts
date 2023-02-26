// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwcqs1A1lJ2FQlyoJLVVS5l41m_e00OBc",
  authDomain: "class-eeab2.firebaseapp.com",
  projectId: "class-eeab2",
  storageBucket: "class-eeab2.appspot.com",
  messagingSenderId: "702731056746",
  appId: "1:702731056746:web:82b4e1dc5d3c081e6c7c13",
  measurementId: "G-BVXYPCMQ74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth=getAuth(app);
export { db,auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword };
