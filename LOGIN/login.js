
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//   import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyAvZzCrAvJFtDJDPrRJJzE4k4Ik5XaBI0k",
//     authDomain: "food-web-61643.firebaseapp.com",
//     projectId: "food-web-61643",
//     storageBucket: "food-web-61643.appspot.com",
//     messagingSenderId: "56580975454",
//     appId: "1:56580975454:web:86100ef73b0d36e0e93dcf"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth();
// const singin = document.querySelector('#sign-in').addEventListener('click',(()=>{
//     const username= document.querySelector('#user-name').value
//     const email = document.querySelector('#email').value
//     const password = document.querySelector('#password').value
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//      alert('user created succesfully');
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     alert(errorMessage);
//   });
// }))