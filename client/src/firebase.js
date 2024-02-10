// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rgpapp-mern.firebaseapp.com",
  projectId: "rgpapp-mern",
  storageBucket: "rgpapp-mern.appspot.com",
  messagingSenderId: "911258585314",
  appId: "1:911258585314:web:601c8ca4abe2fa17bf36bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);