import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  //   // COPY this from your Firebase Console
  //   apiKey: "your-api-key-goes-here",
  //   authDomain: "your-project-name-here.firebaseapp.com",
  //   databaseURL: "https://your-project-name-here.firebaseio.com",
  //   projectId: "your-project-name-here",
  //   storageBucket: "your-project-name.appspot.com",
  //   messagingSenderId: "xxxxxxxx",
  apiKey: "AIzaSyAGVzfSDSEKNOKDZLc9mtrumIfnPmiM0QE",
  authDomain: "beverageshop-14060.firebaseapp.com",
  projectId: "beverageshop-14060",
  storageBucket: "beverageshop-14060.firebasestorage.app",
  messagingSenderId: "587237184942",
  appId: "1:587237184942:web:33ea55cefb7bc770c8e43f"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export default db;
