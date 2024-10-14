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

document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA.');
        return;
    }

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = firebase.auth();

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            var user = userCredential.user;
            var userName = user.displayName || 'User'; // Retrieve user's name or use a default value
            var userEmail = user.email;

            // Save user's data to Firebase Realtime Database
            firebase.database().ref('users/' + user.uid).set({
                username: userName,
                email: userEmail
            }).then(() => {
                alert('Signed up successfully');
                console.log(`User signed up: ${userName}`);
                localStorage.setItem('signup', 'true'); // Set signup status
                localStorage.setItem('userName', userName); // Store user's name
                window.location.href = 'index.html';
            }).catch((error) => {
                console.error('Error saving data to database:', error);
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var userFriendlyMessage = '';

            switch (errorCode) {
                case 'auth/operation-not-allowed':
                    userFriendlyMessage = 'Email/password accounts are not enabled.';
                    break;
                case 'auth/missing-email':
                    userFriendlyMessage = 'An email address is required.';
                    break;
                case 'auth/internal-error':
                    userFriendlyMessage = 'Oops! Something went wrong. Please try again later.';
                    break;
                case 'auth/too-many-requests':
                    userFriendlyMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
                    break;
                case 'auth/network-request-failed':
                    userFriendlyMessage = 'A network error has occurred. Please try again later.';
                    break;
                case 'auth/user-disabled':
                    userFriendlyMessage = 'The user account has been disabled by an administrator.';
                    break;
                case 'auth/user-not-found':
                    userFriendlyMessage = 'The specified user account does not exist.';
                    break;
                case 'auth/missing-password':
                    userFriendlyMessage = 'A password is required.';
                    break;
                case 'auth/invalid_login_credentials':
                    userFriendlyMessage = 'The password is invalid.';
                    break;
                case 'auth/invalid-email':
                    userFriendlyMessage = 'The email address is badly formatted.';
                    break;
                default:
                    userFriendlyMessage = errorMessage; // Use the default Firebase error message if no cases match
            }
            alert(userFriendlyMessage);
        });
});

if (userCredential && userCredential.user) {
    // Add your code here
} else {


}
if (signup = true) {
    window.location.href = 'verification.html'
}