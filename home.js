// JavaScript to make the logo act as a button to go to the home page
document.addEventListener("DOMContentLoaded", function() {
    // Get the logo link element by its ID
    var logoLink = document.getElementById("logo");

    // Add a click event listener to the logo link
    logoLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = "home.html"; // Replace with your actual home page URL
    });
});
