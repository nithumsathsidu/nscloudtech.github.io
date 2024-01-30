document.getElementById("signupOverlay").addEventListener("click", function () {
    document.querySelector(".container").classList.add("login-mode");
});

document.getElementById("loginOverlay").addEventListener("click", function () {
    document.querySelector(".container").classList.remove("login-mode");
});

function login() {
    // Add login functionality here
    alert("Login button clicked");
}

function signup() {
    // Add signup functionality here
    alert("Sign Up button clicked");
}
