// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZk2SX2LMLVASuvN6-0rDEH_LtU5LJjhI",
  authDomain: "painting-craft.firebaseapp.com",
  projectId: "painting-craft",
  storageBucket: "painting-craft.appspot.com",
  messagingSenderId: "353089083804",
  appId: "1:353089083804:web:a8813915f3ad6231641059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;