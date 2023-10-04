// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqCzbtWnb2NNOP1vLY8LKpF7qJAUfOELQ",
  authDomain: "react-dragon-auth-48b27.firebaseapp.com",
  projectId: "react-dragon-auth-48b27",
  storageBucket: "react-dragon-auth-48b27.appspot.com",
  messagingSenderId: "137229345549",
  appId: "1:137229345549:web:69e26ec6e070aed2d90644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;