import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCfqGxXOJNVkB2PA-IIf0Rpp8W10_x4QwU",
  authDomain: "tshentrofivem.firebaseapp.com",
  projectId: "tshentrofivem",
  storageBucket: "tshentrofivem.appspot.com",
  messagingSenderId: "940223265429",
  appId: "1:940223265429:web:068fae7bcf28ce31d7799c",
  measurementId: "G-TVWDZ68KZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
