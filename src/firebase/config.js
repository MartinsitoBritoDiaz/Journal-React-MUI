// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyChMrrR_EpUJt1Dwehmc23AIyAZN2HTZNY",

  authDomain: "react-courses-2acab.firebaseapp.com",

  projectId: "react-courses-2acab",

  storageBucket: "react-courses-2acab.appspot.com",

  messagingSenderId: "164510163627",

  appId: "1:164510163627:web:750ad8499c4a7a74d7cdee",

  measurementId: "G-XWLM1SE47C"

};


// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FurebaseDB = getFirestore( FirebaseApp );
