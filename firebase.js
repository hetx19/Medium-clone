// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCa9bk27r2EDKLWFj14R_gMPKQAE9zHz4",
  authDomain: "medium-clone-70689.firebaseapp.com",
  projectId: "medium-clone-70689",
  storageBucket: "medium-clone-70689.appspot.com",
  messagingSenderId: "143176978644",
  appId: "1:143176978644:web:0849a8c3e70b029ee72b41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
