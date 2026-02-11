import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCK-iwRJ4-dnJ3KsJbhcG3B73WlYamZIp4",
    authDomain: "atumwaitlist.firebaseapp.com",
    projectId: "atumwaitlist",
    storageBucket: "atumwaitlist.firebasestorage.app",
    messagingSenderId: "291574916425",
    appId: "1:291574916425:web:e5c130cf1895985c1de698",
    measurementId: "G-EQX1R5NBDP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics conditionally as it might not be supported in all environments
// Initialize Analytics conditionally as it might not be supported in all environments
let analytics: ReturnType<typeof getAnalytics> | undefined;
isSupported().then(supported => {
    if (supported) {
        analytics = getAnalytics(app);
    }
});

export { app, analytics, db, collection, addDoc, serverTimestamp };
