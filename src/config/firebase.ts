// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";   //getAuth -allows you to manage users' authentication status.
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZY1CC-cGRtUE_TTNUMgPELEA3IlrVo7M",
  authDomain: "react-project-1-ef530.firebaseapp.com",
  projectId: "react-project-1-ef530",
  storageBucket: "react-project-1-ef530.appspot.com",
  messagingSenderId: "388245324931",
  appId: "1:388245324931:web:b9d4f7ca7617e44139c7b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // use it in other parts of your React application to handle authentication.
export const provider = new GoogleAuthProvider();  // allows your application to use Google as an authentication provider.

export const db = getFirestore(app);