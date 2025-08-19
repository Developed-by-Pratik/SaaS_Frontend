import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGZ5QX9cnsXdIdpZainnAS4ALk8Tmg7Ag",
  authDomain: "saas-application-d8968.firebaseapp.com",
  projectId: "saas-application-d8968",
  storageBucket: "saas-application-d8968.firebasestorage.app",
  messagingSenderId: "560714076553",
  appId: "1:560714076553:web:a8de8e59b3e81a8cf8d158",
  measurementId: "G-BTZZKEGDCB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider);
};