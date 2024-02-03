// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw4XhKSi9OgV7RCdz-_w5IfBeRK88G4ck",
  authDomain: "iblog-9e570.firebaseapp.com",
  projectId: "iblog-9e570",
  storageBucket: "iblog-9e570.appspot.com",
  messagingSenderId: "544136059571",
  appId: "1:544136059571:web:feca6bf91ea094c21eaec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// auth initialize
export const auth = getAuth(app);

// firestore initialize
export const db = getFirestore(app)

// firebase storage initialize
export const storage = getStorage(app)


// server time stamp
export const timeStamp = serverTimestamp
