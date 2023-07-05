// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBl8VK9xXMVeAQDH4Pvk5YDfmkSHJugI4E",
  authDomain: "lqet-9aa46.firebaseapp.com",
  projectId: "lqet-9aa46",
  storageBucket: "lqet-9aa46.appspot.com",
  messagingSenderId: "850395072418",
  appId: "1:850395072418:web:f02d86f49f4f44fc3bd4fb",
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
