// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyCMEf3V_nHeZHkEbC4CvhYkFaeBqEzzSb0",
  authDomain: "mern-realestate-81ed5.firebaseapp.com",
  projectId: "mern-realestate-81ed5",
  storageBucket: "mern-realestate-81ed5.appspot.com",
  messagingSenderId: "381752448573",
  appId: "1:381752448573:web:b8d7d7e3cfbfa3e1fb7c54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);