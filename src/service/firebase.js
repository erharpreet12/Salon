// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2J1RLIV3dgZTXN3Kmg2M7KRwOD6V4s54",
  authDomain: "makeupmaster-2d8f5.firebaseapp.com",
  projectId: "makeupmaster-2d8f5",
  storageBucket: "makeupmaster-2d8f5.appspot.com",
  messagingSenderId: "288112511761",
  appId: "1:288112511761:web:fb7f71a87b3e6ceb409ab0",
  measurementId: "G-BKKBXXH7SJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
