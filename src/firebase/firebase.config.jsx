// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBQcbw3HZ-KShiC6YzLu3v0VbqHAVTY0Fs",

  authDomain: "oauth-a3c01.firebaseapp.com",

  projectId: "oauth-a3c01",

  storageBucket: "oauth-a3c01.appspot.com",

  messagingSenderId: "931880236681",

  appId: "1:931880236681:web:f78940ae737b852b3db858",

  measurementId: "G-5BVKF2N1SN"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

/* const analytics = getAnalytics(app); */

export const auth = getAuth(app)