// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = firebase.auth();

// Add event listener to the sign up button
const signUpBtn = document.getElementById("sign-up-btn");
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Get the user's email and password
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  
  // Create a new user with email and password
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
