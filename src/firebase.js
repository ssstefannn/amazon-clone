import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAnvT2qjg54MFHDo9c_A0FQV6SPEEFzhTY",
    authDomain: "clone-7ff3e.firebaseapp.com",
    projectId: "clone-7ff3e",
    storageBucket: "clone-7ff3e.appspot.com",
    messagingSenderId: "720201225796",
    appId: "1:720201225796:web:0b6727bd95b413673b8e11",
    measurementId: "G-ESWEKRDY2V"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};