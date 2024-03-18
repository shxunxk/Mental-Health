// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import {
//   onAuthStateChanged ,
//   sendPasswordResetEmail,
//   confirmPasswordReset
// } from 'firebase/auth';

// export const passwordReset = async (email) => {
//   return await sendPasswordResetEmail(auth, email)
// }

// export const confirmThePasswordReset = async (
//   oobCode, newPassword
// ) => {
//   if(!oobCode && !newPassword) return;
  
//   return await confirmPasswordReset(auth, oobCode, newPassword)
// }

// export const startAuthStateListener = (callback) => {
//   const unsubscribe = onAuthStateChanged(auth, (authUser) => {
//     if (typeof callback === "function") {
//       callback(authUser);
//     }
//   });
//   return unsubscribe;
// };


// const firebaseConfig = {
//     apiKey: "AIzaSyCadBKkoiJw6l_CvkZQssK8BJmyN38K0GI",
//     authDomain: "mental-health-2c13a.firebaseapp.com",
//     projectId: "mental-health-2c13a",
//     storageBucket: "mental-health-2c13a.appspot.com",
//     messagingSenderId: "867523224400",
//     appId: "1:867523224400:web:3514e24688dca7c7d78255"
//   };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export default app;