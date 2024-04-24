import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCD8rb-RnXS0Y5vbhkykhcVOODA2iAKwUI",

  authDomain: "check-in-4cac4.firebaseapp.com",

  projectId: "check-in-4cac4",

  storageBucket: "check-in-4cac4.appspot.com",

  messagingSenderId: "1009085414310",

  appId: "1:1009085414310:web:3b64d2c54924ae80c0ad67",

  measurementId: "G-6P68P6WJVE"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storeImg = getStorage(app)
export const db = getFirestore(app);