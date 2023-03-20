// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC10sWyxV6-t6anOyQbGmpvqEvBHJxY6HM",
//     authDomain: "thinkfoodandjapan.firebaseapp.com",
//     databaseURL: "https://thinkfoodandjapan-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "thinkfoodandjapan",
//     storageBucket: "thinkfoodandjapan.appspot.com",
//     messagingSenderId: "447508903258",
//     appId: "1:447508903258:web:f59e6fbd760422e9fbef63",
//     measurementId: "G-KCBHKYSH8J"
// };

//   // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  

// reference your database
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD15O8Of4oIrhQNnNOTEM1YeNEm9r1wRJg",
    authDomain: "foodluck-69b3d.firebaseapp.com",
    projectId: "foodluck-69b3d",
    storageBucket: "foodluck-69b3d.appspot.com",
    messagingSenderId: "308878471186",
    appId: "1:308878471186:web:f41d2581cc838838afe8cb",
    measurementId: "G-V1BKTSMQ3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

