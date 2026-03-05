// Exercise 3 – Form Validation
// ==============================
// Write your JavaScript below. Each section corresponds to an exercise on the page.
// Open index.html in your browser, fill in the form, and click Submit to test your code.


// ── Exercise 1: Basic Form Validation ───────────────────────────────────────

// 1. Required Fields
//    Listen for the 'submit' event on #myForm.
//    If the 'name' or 'email' field is empty, show an alert and call event.preventDefault()
//    to stop the form from being submitted.
//    Hint:
//    document.getElementById('myForm').addEventListener('submit', function(event) {
//        let name = document.getElementById('name').value;
//        let email = document.getElementById('email').value;
//        if (name === '' || email === '') {
//            alert('Name and email are required.');
//            event.preventDefault();
//        }
//    });


// 2. Email Format
//    Extend your submit listener (or add a new one) to validate the email format.
//    Use the regular expression /^[^\s@]+@[^\s@]+\.[^\s@]+$/ to test the value.
//    If invalid, alert the user and prevent submission.


// ── Challenge Tasks ──────────────────────────────────────────────────────────

// 3. Password Confirmation
//    Extend your submit validation to check that the 'password' and 'confirmPassword'
//    fields contain the same value. If they don't match, alert the user and prevent submission.


// 4. Real-time Email Validation
//    Add an 'input' event listener to the #email field.
//    As the user types, test the current value against the email regex.
//    Update #emailFeedback: set its textContent to 'Valid email address.' (color: green)
//    or 'Invalid email address.' (color: red) accordingly.
//    Hint:
//    document.getElementById('email').addEventListener('input', function() {
//        let email = this.value;
//        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//        let emailFeedback = document.getElementById('emailFeedback');
//        if (!emailPattern.test(email)) {
//            emailFeedback.textContent = 'Invalid email address.';
//            emailFeedback.style.color = 'red';
//        } else {
//            emailFeedback.textContent = 'Valid email address.';
//            emailFeedback.style.color = 'green';
//        }
//    });

