# Exercise 3 - Form Validation

## What is Form Validation?

**Form validation** is the process of checking that a user's input meets certain rules before it is sent to a server (or acted upon). It protects data quality and gives users immediate, helpful feedback when they make a mistake.

### Client-side vs. Server-side validation

| | Client-side (browser) | Server-side (back end) |
|---|---|---|
| **Where** | JavaScript in the browser | Code on the web server |
| **Speed** | Instant feedback | Requires a network round-trip |
| **Security** | Can be bypassed | Cannot be bypassed |
| **Use for** | User experience / UX | Trust & security |

> **Important:** Client-side validation improves the user experience, but it must *always* be backed up by server-side validation. A user can disable JavaScript or tamper with network requests, so never rely solely on the browser for security.

### Common validation rules

- **Required fields** – the field must not be empty.
- **Format checks** – the value must match a pattern (e.g. a valid email address or phone number).
- **Length limits** – the value must be within a minimum/maximum number of characters.
- **Matching fields** – two fields must contain the same value (e.g. password confirmation).

### Using regular expressions for format checks

A **regular expression** (regex) is a pattern used to test whether a string matches a specific format.

```javascript
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailPattern.test('user@example.com'); // true
emailPattern.test('not-an-email');     // false
```

---

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