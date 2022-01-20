import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAl_z5QnFtOqcS1Gq4etStPKDswdUuWsXo",
  authDomain: "kct-acm-51215.firebaseapp.com",
  projectId: "kct-acm-51215",
  databaseURL: "https://kct-acm-51215-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "kct-acm-51215.appspot.com",
  messagingSenderId: "65366423521",
  appId: "1:65366423521:web:3399c705853bcc858bc4a0",
  measurementId: "G-N40B1XZ614"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);