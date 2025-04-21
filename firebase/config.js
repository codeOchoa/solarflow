import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCuAwsNsXj4b_H9XJOP-Td426FF3ML8Qy0",
    authDomain: "solarflow-c458c.firebaseapp.com",
    projectId: "solarflow-c458c",
    storageBucket: "solarflow-c458c.firebasestorage.app",
    messagingSenderId: "292864865875",
    appId: "1:292864865875:web:1e79ac899f8b95a1c638a6",
    measurementId: "G-EG82G319YG"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);