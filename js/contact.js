document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-btn");
    const loginBox = document.querySelector(".login-box");

    // Initially hide the login box
    loginBox.style.display = "none";

    // Toggle login box visibility when button is clicked
    contactButton.addEventListener("click", function () {
        if (loginBox.style.display === "none") {
            loginBox.style.display = "block";
        } else {
            loginBox.style.display = "none";
        }
    });
});
