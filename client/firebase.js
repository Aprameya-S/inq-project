import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDscDXnLX_QplZMFreizoVdRbQDrCpCP54",
  authDomain: "inq-proj.firebaseapp.com",
  projectId: "inq-proj",
  storageBucket: "inq-proj.appspot.com",
  messagingSenderId: "221252468880",
  appId: "1:221252468880:web:9dbe4e0a6638e8deb99815",
  measurementId: "G-LN2ZJPGT2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)



// const analytics = getAnalytics(app);