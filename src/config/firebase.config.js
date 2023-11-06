
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey:import.meta.env.FIREBASE_APIKEY,
    authDomain:import.meta.env.FIREBASE_AUTHDOMAIN,
    projectId:import.meta.env.FIREBASE_PROJECTID,
    storageBucket:import.meta.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId:import.meta.env.FIREBASE_MESSAGINGSENDERID,
    appId:import.meta.env.FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);