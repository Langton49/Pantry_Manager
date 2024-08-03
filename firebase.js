// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ34B3Zs3Kx0v6RxfCNMJUMGta2mY62rQ",
  authDomain: "pantry-manager-4f58a.firebaseapp.com",
  projectId: "pantry-manager-4f58a",
  storageBucket: "pantry-manager-4f58a.appspot.com",
  messagingSenderId: "551189940579",
  appId: "1:551189940579:web:dc2a46e4d889db1a50eb56",
  measurementId: "G-73GZ8P6K7E"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export { firestore };