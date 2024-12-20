import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIocDZtK-imfvc6B__Fd_Oj7XO2jPSk-M",
  authDomain: "userbase-5dd92.firebaseapp.com",
  projectId: "userbase-5dd92",
  storageBucket: "userbase-5dd92.firebasestorage.app",
  messagingSenderId: "561541743464",
  appId: "1:561541743464:web:0ac2d331866cbde8a18cdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;