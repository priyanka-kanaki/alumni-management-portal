
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC0j42Fv2XprWzY9UdwXDoUbi9gSliSC68",
    authDomain: "aluminiweb-ff991.firebaseapp.com",
    projectId: "aluminiweb-ff991",
    storageBucket: "aluminiweb-ff991.firebasestorage.app",
    messagingSenderId: "398472179248",
    appId: "1:398472179248:web:0fa84ab08bd3f9cd2bc7f5",
    measurementId: "G-X1G7W0RRXY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app); // assign globally
  window.db = getFirestore(app);
