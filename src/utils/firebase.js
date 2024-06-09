// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdZFqYKPkmf3YCk2DQ9O6pZe1lqaB-sxk",
  authDomain: "netflix-gpt-24.firebaseapp.com",
  projectId: "netflix-gpt-24",
  storageBucket: "netflix-gpt-24.appspot.com",
  messagingSenderId: "660815272793",
  appId: "1:660815272793:web:983faf55b8356d75058a48",
  measurementId: "G-PE7KF3Z1PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);