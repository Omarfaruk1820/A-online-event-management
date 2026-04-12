// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3sO8O92h7IIsori0Q5JiEFHkoB7l-i-M",
  authDomain: "event-management-online.firebaseapp.com",
  projectId: "event-management-online",
  storageBucket: "event-management-online.firebasestorage.app",
  messagingSenderId: "222348463013",
  appId: "1:222348463013:web:dd7ead77f41d19284ff64c",
  measurementId: "G-7X43QMN4QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth
