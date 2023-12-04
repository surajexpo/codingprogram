
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
export const environment = {
production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB8BS7gV99jm0vI0Xmebcg8mN8lnKh0bDk",
    authDomain: "codingprogram-c2ec6.firebaseapp.com",
    projectId: "codingprogram-c2ec6",
    storageBucket: "codingprogram-c2ec6.appspot.com",
    messagingSenderId: "393441723174",
    appId: "1:393441723174:web:eae83db49ce565aa5c37e7",
    measurementId: "G-M8Z4087SPJ"
}
};
// Initialize Firebase
initializeApp(environment.firebaseConfig);
