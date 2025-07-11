// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQRaCjuSZvtZLcmd4CKLvbDAPwKmzmta0",
  authDomain: "anomalydetectionsystem-dd1b7.firebaseapp.com",
  databaseURL: "https://anomalydetectionsystem-dd1b7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anomalydetectionsystem-dd1b7",
  storageBucket: "anomalydetectionsystem-dd1b7.firebasestorage.app",
  messagingSenderId: "203650774292",
  appId: "1:203650774292:web:04bab4bc179738ea50fe01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)