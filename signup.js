// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
//import { signin } from "./signin.js";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdP0H1AHOZkv_iZZjpKVeVwclcqWUNxy8",

    authDomain: "nscloudtech.firebaseapp.com",

    projectId: "nscloudtech",

    storageBucket: "nscloudtech.appspot.com",

    messagingSenderId: "313047332528",

    appId: "1:313047332528:web:a4aabf4e61bb518996ed75",

    measurementId: "G-725YRQCWG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var signin 
window.onload = function() {
document.getElementById('signup-form').addEventListener('submit', function(e) {
e.preventDefault();
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        signin === true
        var user = userCredential.user;
        alert('Signed up successfully');                  
        window.location.href = 'signin.html';
    })
    .catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;

var userFriendlyMessage = '';

switch (errorCode) {
case 'auth/email-already-in-use':
userFriendlyMessage = 'This email is already in use by another account.';
break;
case 'auth/invalid-email':
userFriendlyMessage = 'The email address is not valid.';
break;
case 'auth/operation-not-allowed':
userFriendlyMessage = 'Email/password accounts are not enabled.';
break;
case 'auth/weak-password':
userFriendlyMessage = 'The password is too weak.';
break;
default:
userFriendlyMessage = errorMessage; // Use the default Firebase error message if no cases match
}

alert('Error: ' + userFriendlyMessage);
});
});
};

if (userCredential && userCredential.user) {
// Add your code here
} else {


}