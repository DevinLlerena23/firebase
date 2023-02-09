// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB48iW0wg24fZEreuvFUxRwUMEGRxIHfsI",
    authDomain: "task-firebase-2f07e.firebaseapp.com",
    projectId: "task-firebase-2f07e",
    storageBucket: "task-firebase-2f07e.appspot.com",
    messagingSenderId: "490811066950",
    appId: "1:490811066950:web:72f30b45a412d209379847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);