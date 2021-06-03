import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
    apiKey: "AIzaSyDI6dhiu_3bRvGP2m9YWCUGk6ZgcSXGONE",
    authDomain: "famous-pictures.firebaseapp.com",
    projectId: "famous-pictures",
    storageBucket: "famous-pictures.appspot.com",
    messagingSenderId: "99629277273",
    appId: "1:99629277273:web:8a2debbeb231de1da6d148",
    measurementId: "G-VR11VWMG1T"
});