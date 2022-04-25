// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuV-7WlgqvoLXckn0yAuERNqr9RiF09SU",
  authDomain: "openproma.firebaseapp.com",
  projectId: "openproma",
  storageBucket: "openproma.appspot.com",
  messagingSenderId: "1020914053628",
  appId: "1:1020914053628:web:fbb0ff4538110930bc0279",
  measurementId: "G-P6TQ2FECB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);