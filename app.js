// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBl8VK9xXMVeAQDH4Pvk5YDfmkSHJugI4E",
  authDomain: "lqet-9aa46.firebaseapp.com",
  projectId: "lqet-9aa46",
  storageBucket: "lqet-9aa46.appspot.com",
  messagingSenderId: "850395072418",
  appId: "1:850395072418:web:f02d86f49f4f44fc3bd4fb",
  measurementId: "G-TS6KMQL348"
};
firebase.initializeApp(firebaseConfig);

// Get elements from the HTML DOM
const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const messageDiv = document.querySelector('#message');

// Add submit event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission behavior

  // Get user input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Create new user with email and password
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Clear the form and show success message
      form.reset();
      messageDiv.innerHTML = "Signup successful!";
    })
    .catch((error) => {
      // Show error message to user
      messageDiv.innerHTML = error.message;
    });
});
