// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0rQJ9w47KrM7TqKn4TtpzH_OoB0au_4g",
    authDomain: "form-test-638f3.firebaseapp.com",
    databaseURL: "https://form-test-638f3-default-rtdb.firebaseio.com",
    projectId: "form-test-638f3",
    storageBucket: "form-test-638f3.appspot.com",
    messagingSenderId: "1031249142005",
    appId: "1:1031249142005:web:ff2193781beb2167a1a5bc",
    measurementId: "G-55XFRNZLYC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  
  let number = document.querySelector(".number").value;
  
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message, number);

  saveContactInfo(name, email, message, number);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message, number) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
    number: number,
  });
}
