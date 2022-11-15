// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu58zEkvxIbEdsc2SBdjp3bTWvpIBA2SE",
  authDomain: "react-firebase-auth-6c950.firebaseapp.com",
  projectId: "react-firebase-auth-6c950",
  storageBucket: "react-firebase-auth-6c950.appspot.com",
  messagingSenderId: "909053455564",
  appId: "1:909053455564:web:edb9cc408fafe11ebf6669",
  measurementId: "G-LYFWQ90077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);