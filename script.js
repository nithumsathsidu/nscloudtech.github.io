const auth = window.auth;

window.onload = function() {
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                alert('Signed up successfully');                  
                emailInput.value = ''; // Clear email input
                passwordInput.value = ''; // Clear password input

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
if (auth.currentUser) {
    // User is signed in.
    signin === true
} else {
    // No user is signed in.
    signin === false
}



if (signin === true) {
    // Code to execute if signin is true
    console.log("User is signed in");
    window.location.href = "index.html";
} 
else {
    // Code to execute if signin is false
    console.log("User is not signed in");
}