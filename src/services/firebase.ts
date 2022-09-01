import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJD0rTdPYG45pbkJVJX5-Pc2WQeVP4BLQ",
  authDomain: "auth-73d6f.firebaseapp.com",
  projectId: "auth-73d6f",
  storageBucket: "auth-73d6f.appspot.com",
  messagingSenderId: "611785405627",
  appId: "1:611785405627:web:8d312d2ada14586fc9a59e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
