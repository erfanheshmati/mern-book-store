// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCADaLBy_0eLpO-_1NkrcFPEbqA2pAHrL0",
  authDomain: "mern-book-inventory-e26ec.firebaseapp.com",
  projectId: "mern-book-inventory-e26ec",
  storageBucket: "mern-book-inventory-e26ec.appspot.com",
  messagingSenderId: "808652716852",
  appId: "1:808652716852:web:0eb30c5a3da9981d4f8361",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
