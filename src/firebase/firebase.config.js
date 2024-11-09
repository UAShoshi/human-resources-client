// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  VITE_APIKEY:import.meta.env.VITE_APIKEY, 
  VITE_AUTHDOMAIN:import.meta.env.VITE_AUTHDOMAIN,
  VITE_PROJECTID:import.meta.env.VITE_PROJECTID,
  VITE_STORAGEBUCKET:import.meta.env.VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID:import.meta.env.VITE_MESSAGINGSENDERID,
  VITE_APPID:import.meta.env.VITE_APPID 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);