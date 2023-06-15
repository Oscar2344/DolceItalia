
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD-CkSJQJ3VWecC-hKvySvRkUNASVrcI2A",
  authDomain: "dolce-italia-652a9.firebaseapp.com",
  projectId: "dolce-italia-652a9",
  storageBucket: "dolce-italia-652a9.appspot.com",
  messagingSenderId: "143691685771",
  appId: "1:143691685771:web:a2619b7c874d1f3c59598e"
};

 export const initFirebase =  initializeApp(firebaseConfig);