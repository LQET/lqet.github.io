// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
var signupForm = document.getElementById('signup-form');

// Add signup form submit event listener
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user inputs
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Sign up with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Signed up successfully
      var user = userCredential.user;
      console.log('Signup successful:', user);
    })
    .catch(function(error) {
      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Signup error:', errorCode, errorMessage);
    });
});
