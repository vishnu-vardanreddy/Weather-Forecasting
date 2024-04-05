document.querySelector(".login-form form").addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  // Example authentication (replace with your actual authentication logic)
  if (email == "vishnu@gmail.com" && password == "123") {
    // Redirect to actual page after successful login
    window.location.href = "weatherwebsite.html";
  } else {
    // Display error message if login fails
    document.getElementById("error-message").style.display = "block";
  }
});

// Add similar event listener for signup form if needed
 //document.querySelector(".signup-form form").addEventListener("submit", function(event) {
  //event.preventDefault();

//   // Handle signup form submission logic here
// });
