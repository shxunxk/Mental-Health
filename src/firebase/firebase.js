import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCadBKkoiJw6l_CvkZQssK8BJmyN38K0GI",
  authDomain: "mental-health-2c13a.firebaseapp.com",
  projectId: "mental-health-2c13a",
  storageBucket: "mental-health-2c13a.appspot.com",
  messagingSenderId: "867523224400",
  appId: "1:867523224400:web:3514e24688dca7c7d78255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}