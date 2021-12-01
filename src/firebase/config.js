import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSrUvjX8O5WAqGOiPv1apoVCIB4HgK8-0",
  authDomain: "finance-tracker-a82b4.firebaseapp.com",
  projectId: "finance-tracker-a82b4",
  storageBucket: "finance-tracker-a82b4.appspot.com",
  messagingSenderId: "840140586794",
  appId: "1:840140586794:web:7eec72c7c071f391c7a853",
};

// Init Firebase \\
firebase.initializeApp(firebaseConfig);

// Init Services \\
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// Timestamp \\
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
