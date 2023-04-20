// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuNIzBVeZohPmhS7XCoUoYgoAMC_k8kRA",
  authDomain: "meuamigosecreto-auth.firebaseapp.com",
  projectId: "meuamigosecreto-auth",
  storageBucket: "meuamigosecreto-auth.appspot.com",
  messagingSenderId: "55061482533",
  appId: "1:55061482533:web:fbd11642e216c024b343cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);