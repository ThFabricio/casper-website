import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm5EvZop5zMyrF7KB620Y9uYC5cMSrJ4g",
  authDomain: "casper-chatbot.firebaseapp.com",
  projectId: "casper-chatbot",
  storageBucket: "casper-chatbot.appspot.com",
  messagingSenderId: "28994125354",
  appId: "1:28994125354:web:a542da1130bc7171444d53",
  measurementId: "G-XX27NDF9QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);