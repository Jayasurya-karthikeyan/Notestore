import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1NBaQ2_py-WcLUJ7s7NbWn8IWqBXhaw4",
  authDomain: "the-project-one-2241a.firebaseapp.com",
  projectId: "the-project-one-2241a",
  storageBucket: "the-project-one-2241a.appspot.com",
  messagingSenderId: "205154303845",
  appId: "1:205154303845:web:70468c5e8af7c3c852eb8c",
  measurementId: "G-N5SN56NRHG",
};

firebase.initializeApp(firebaseConfig);
