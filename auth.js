import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "auth-46aed.firebaseapp.com",
  projectId: "auth-46aed",
  storageBucket: "auth-46aed.appspot.com",
  messagingSenderId: "997650079405",
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: "G-CKP9LY6G7C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app


