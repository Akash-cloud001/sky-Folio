// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp5YukgrhFBmU472_6oUJn4yC7Qs5DxuY",
  authDomain: "sky-folio.firebaseapp.com",
  projectId: "sky-folio",
  storageBucket: "sky-folio.appspot.com",
  messagingSenderId: "452230935376",
  appId: "1:452230935376:web:baf9724d18b8c51358b255",
  measurementId: "G-4R71EWDWH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);