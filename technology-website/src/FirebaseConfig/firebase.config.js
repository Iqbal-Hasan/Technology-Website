// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoylTtPmGAFTaiIdu9TOajTC3XoBF5BTc",
  authDomain: "technology-products-website.firebaseapp.com",
  projectId: "technology-products-website",
  storageBucket: "technology-products-website.appspot.com",
  messagingSenderId: "518879435864",
  appId: "1:518879435864:web:2b2c272e1ec5bec25cfe2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;