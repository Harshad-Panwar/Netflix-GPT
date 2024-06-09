// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTBoyDmJP9rT3pXX1ayuHIaGCydu9YcuA",
  authDomain: "netflixx--gpt.firebaseapp.com",
  projectId: "netflixx--gpt",
  storageBucket: "netflixx--gpt.appspot.com",
  messagingSenderId: "41736279915",
  appId: "1:41736279915:web:eb9235fdd5c761861f9e2e",
  measurementId: "G-GGRXGWCT82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);