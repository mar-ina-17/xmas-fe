// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjMjeEWRoA6dUg8SBDUU10kIg2icnRV1U",
  authDomain: "xmas-roulette-25.firebaseapp.com",
  projectId: "xmas-roulette-25",
  storageBucket: "xmas-roulette-25.firebasestorage.app",
  messagingSenderId: "809448175989",
  appId: "1:809448175989:web:615eee9733fb75326efb3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
