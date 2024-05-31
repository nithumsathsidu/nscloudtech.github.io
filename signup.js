// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
<<<<<<< HEAD
=======
import { signin } from "./signin.js";
>>>>>>> 8df7ce72c77d11b3dbab597a35c8154e165c7495

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
<<<<<<< HEAD

var signin 
=======
window.auth = auth;

>>>>>>> 8df7ce72c77d11b3dbab597a35c8154e165c7495
window.onload = function() {
document.getElementById('signup-form').addEventListener('submit', function(e) {
e.preventDefault();
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
<<<<<<< HEAD
        signin === true
        var user = userCredential.user;
        alert('Signed up successfully');                  

    })
    .catch((error) => {
=======
        // Signed in 
        var user = userCredential.user;
        alert('Signed up successfully');                  
        signin === true
    })
    .catch((error) => {
        signin === false
>>>>>>> 8df7ce72c77d11b3dbab597a35c8154e165c7495
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

<<<<<<< HEAD
if (userCredential && userCredential.user) {
// Add your code here
} else {


}

window.auth = auth;

if (signin === true) {
// Code to execute if signin is true
console.log("User is signed in");
window.location.href = "index.html";
} 
else {
// Code to execute if signin is false
console.log("User is not signed in");

=======

if (signin === true) {
    // Code to execute if signin is true
    console.log("User is signed in");
    window.location.href = "index.html";
} else {
    // Code to execute if signin is false
    console.log("User is not signed in");
console.log("User is not signed in");
>>>>>>> 8df7ce72c77d11b3dbab597a35c8154e165c7495
}