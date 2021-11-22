// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAETwlN7QsBeHJ3D5wo96-LRmGhagWou1E",
  authDomain: "vtuber-c174f.firebaseapp.com",
  projectId: "vtuber-c174f",
  storageBucket: "vtuber-c174f.appspot.com",
  messagingSenderId: "57224290588",
  appId: "1:57224290588:web:3ffd5ed83e62f7e30ddad9",
  measurementId: "G-5DLYY5MGBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { app, analytics, provider, auth };
