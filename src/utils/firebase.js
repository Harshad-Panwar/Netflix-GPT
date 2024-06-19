import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeKY7KDbwgdNQ8eR_T0PXnjakguquoU6o",
  authDomain: "netflixx-gpt-f8790.firebaseapp.com",
  projectId: "netflixx-gpt-f8790",
  storageBucket: "netflixx-gpt-f8790.appspot.com",
  messagingSenderId: "760796071668",
  appId: "1:760796071668:web:3a3af30856950a110f80a1",
  measurementId: "G-VMSJY04XTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
