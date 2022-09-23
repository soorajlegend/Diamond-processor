// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBileYxb-jKBueZbR_5j4a8Ddyp7YRf1Z8",
  authDomain: "diamond-processor.firebaseapp.com",
  projectId: "diamond-processor",
  storageBucket: "diamond-processor.appspot.com",
  messagingSenderId: "449045233853",
  appId: "1:449045233853:web:450a8512650bfd8d7237d4",
  measurementId: "G-51F1KYEF12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default app;