// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyD2J1RLIV3dgZTXN3Kmg2M7KRwOD6V4s54",
  authDomain: "makeupmaster-2d8f5.firebaseapp.com",
  projectId: "makeupmaster-2d8f5",
  storageBucket: "makeupmaster-2d8f5.appspot.com",
  messagingSenderId: "288112511761",
  appId: "1:288112511761:web:fb7f71a87b3e6ceb409ab0",
  measurementId: "G-BKKBXXH7SJ",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export const db = getFirestore(app);

export default app;
