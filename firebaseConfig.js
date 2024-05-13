// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth'
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcQL3ZKQD664v75OAfEHG9n0G_nHl3A9Q",
  authDomain: "fir-chat-defcb.firebaseapp.com",
  projectId: "fir-chat-defcb",
  storageBucket: "fir-chat-defcb.appspot.com",
  messagingSenderId: "122296417028",
  appId: "1:122296417028:web:045cbfee6489072e4e2e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users')
export const roomRef = collection(db, 'rooms')