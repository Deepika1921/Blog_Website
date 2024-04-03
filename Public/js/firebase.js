let firebaseConfig = {
    apiKey: "AIzaSyCkoy5hWlu2otp9fWUFthLr5fXJuzHCXEE",
    authDomain: "blogging-website-a8d77.firebaseapp.com",
    projectId: "blogging-website-a8d77",
    storageBucket: "blogging-website-a8d77.appspot.com",
    messagingSenderId: "513032151855",
    appId: "1:513032151855:web:2de447883964d358e877da"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();