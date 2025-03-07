# Exercise 3 - Form Validation

Series of exercises to practice form validation.

## Setup

1. Open the `index.html` file in your browser to see the initial setup.
2. Open the `script.js` file in your code editor to write your JavaScript code.

## Exercise 1: Basic Form Validation

1. **Required Fields**
   - Task: Ensure that the `name` and `email` fields are not empty when the form is submitted.
   - Instructions: Add an event listener to the form's `submit` event in the `script.js` file. Prevent the form from submitting if the fields are empty.
   ```javascript
   document.getElementById('myForm').addEventListener('submit', function(event) {
       let name = document.getElementById('name').value;
       let email = document.getElementById('email').value;
       if (name === '' || email === '') {
           alert('Name and email are required.');
           event.preventDefault();
       }
   });
   ```

2. **Email Format**
   - Task: Ensure that the email field contains a valid email address.
   - Instructions: Use a regular expression to validate the email format in the `script.js` file.
   ```javascript
   document.getElementById('myForm').addEventListener('submit', function(event) {
       let email = document.getElementById('email').value;
       let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(email)) {
           alert('Please enter a valid email address.');
           event.preventDefault();
       }
   });
   ```

## Challenge Tasks

1. **Password Confirmation**
   - Task: Ensure that the `password` and `confirmPassword` fields match.
   - Instructions: Add validation to check if the passwords match in the `script.js` file.
   ```javascript
   document.getElementById('myForm').addEventListener('submit', function(event) {
       let password = document.getElementById('password').value;
       let confirmPassword = document.getElementById('confirmPassword').value;
       if (password !== confirmPassword) {
           alert('Passwords do not match.');
           event.preventDefault();
       }
   });
   ```

2. **Real-time Validation**
   - Task: Add real-time validation to the `email` field to provide immediate feedback to the user.
   - Instructions: Add an event listener to the `input` event of the email field in the `script.js` file.
   ```javascript
   document.getElementById('email').addEventListener('input', function() {
       let email = document.getElementById('email').value;
       let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       let emailFeedback = document.getElementById('emailFeedback');
       if (!emailPattern.test(email)) {
           emailFeedback.textContent = 'Invalid email address.';
           emailFeedback.style.color = 'red';
       } else {
           emailFeedback.textContent = 'Valid email address.';
           emailFeedback.style.color = 'green';
       }
   });
   ```