// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generate-59f0c.firebaseapp.com",
  projectId: "ai-course-generate-59f0c",
  storageBucket: "ai-course-generate-59f0c.firebasestorage.app",
  messagingSenderId: "1068746679596",
  appId: "1:1068746679596:web:edcab290775ea83de2f889"

  //measurementId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);

export { db };
