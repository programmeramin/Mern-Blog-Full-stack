
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-26821.firebaseapp.com",
  projectId: "mern-blog-26821",
  storageBucket: "mern-blog-26821.firebasestorage.app",
  messagingSenderId: "705637211541",
  appId: "1:705637211541:web:911501858d8b0051206a9c",
  measurementId: "G-PG9NMSFSDE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);