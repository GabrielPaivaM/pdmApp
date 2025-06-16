import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVRFa_NgWoLWFWDp4XXSW9jpEmJGX-g1g",
    authDomain: "pdmassinaturas.firebaseapp.com",
    projectId: "pdmassinaturas",
    storageBucket: "pdmassinaturas.firebasestorage.app",
    messagingSenderId: "960423299398",
    appId: "1:960423299398:web:134055dd8986b65a767d47"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };