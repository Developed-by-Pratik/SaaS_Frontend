// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGZ5QX9cnsXdIdpZainnAS4ALk8Tmg7Ag",
  authDomain: "saas-application-d8968.firebaseapp.com",
  projectId: "saas-application-d8968",
  storageBucket: "saas-application-d8968.firebasestorage.app",
  messagingSenderId: "560714076553",
  appId: "1:560714076553:web:a8de8e59b3e81a8cf8d158",
  measurementId: "G-BTZZKEGDCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider);
};