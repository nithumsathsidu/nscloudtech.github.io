// Import the Firebase modules that you need in your app.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, get, query, orderByChild, equalTo, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnlWeo1q5ca85gDL800o-tgzPqcp4QNsc",
    authDomain: "nscloudtech1.firebaseapp.com",
    databaseURL: "https://nscloudtech1-default-rtdb.firebaseio.com",
    projectId: "nscloudtech1",
    storageBucket: "nscloudtech1.appspot.com",
    messagingSenderId: "682366385440",
    appId: "1:682366385440:web:769ac7c6ee00740c132b45",
    measurementId: "G-Z09RV5W6VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to handle form submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sanitize email to use as a key
    const sanitizedEmail = email.replace(/[.#$[\]]/g, '_');

    // Check if email or username already exists
    const dbRef = ref(database);
    const emailCheck = get(child(dbRef, sanitizedEmail));
    const usernameQuery = query(ref(database, '/'), orderByChild('username'), equalTo(username));
    const usernameCheck = get(usernameQuery);

    Promise.all([emailCheck, usernameCheck]).then((results) => {
        const emailSnapshot = results[0];
        const usernameSnapshot = results[1];

        if (emailSnapshot.exists()) {
            alert('Email is already saved.');
        } else if (usernameSnapshot.exists()) {
            alert('Username already exists.');
        } else {
            // Save data to Firebase Realtime Database
            set(ref(database, sanitizedEmail), {
                username: username,
                email: email,
                password: password
            }).then(() => {
                alert('User data saved successfully!');
                window.location.href = 'index.html';
            }).catch((error) => {
                alert('Failed to save user data: ' + error.message);
            });
        }
    }).catch((error) => {
        alert('Failed to check email or username: ' + error.message);
    });
});