
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbwTBDD_LQ5OtOdfBsOE8YU-kCfYPCncc",
    authDomain: "projetotarefa-a2f58.firebaseapp.com",
    projectId: "projetotarefa-a2f58",
    storageBucket: "projetotarefa-a2f58.appspot.com",
    messagingSenderId: "766289136628",
    appId: "1:766289136628:web:f9ea4d0a23e8887f7387a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)