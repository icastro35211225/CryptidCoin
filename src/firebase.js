// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNuPQ68vwc6E4LCVT8-MQszuLFe3kC8NU",
    authDomain: "cryptidcoin-82580.firebaseapp.com",
    projectId: "cryptidcoin-82580",
    storageBucket: "cryptidcoin-82580.appspot.com/",
    messagingSenderId: "1043600204601",
    appId: "1:1043600204601:web:6c44e0ae871c9b992cfee8",
    measurementId: "G-SVZJ6BQQ9V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);