// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwkXlEt6T86biwOkI8qHafyKdZ7_4zJkU" ,
  authDomain: "doctors-portal-9f283.firebaseapp.com",
  projectId: "doctors-portal-9f283" ,
  storageBucket: "doctors-portal-9f283.appspot.com" ,
  messagingSenderId: 989140699588,
  appId: "1:989140699588:web:108c78cb2748b22c74fc91" ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;