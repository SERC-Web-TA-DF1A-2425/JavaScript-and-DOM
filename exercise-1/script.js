// Exercise 1 – DOM Manipulation
// ================================
// Write your JavaScript below. Each section corresponds to an exercise on the page.
// Reload index.html in your browser after making changes to see the result.


// ── Exercise 1: Selecting Elements ──────────────────────────────────────────

// 1. Select by ID
//    Select the element with id="header" and change its background color to blue.
//    Hint: document.getElementById('header').style.backgroundColor = 'blue';


// 2. Select by Class Name
//    Select all elements with class="item" and change their font size to 20px.
//    Hint: use document.getElementsByClassName('item') and loop over the result.


// 3. Select by Tag Name
//    Select all <p> elements and change their text color to red.
//    Hint: use document.getElementsByTagName('p') and loop over the result.


// 4. Select by Query Selector
//    a) Select the FIRST element with class="highlight" and set its border to '1px solid black'.
//    b) Select the first <p> inside ".container" and set its fontStyle to 'italic'.
//    Hint: document.querySelector('.highlight') and document.querySelector('.container p')


// 5. Select by Query Selector All
//    a) Select ALL elements with class="highlight" and set their margin to '10px'.
//    b) Select ALL <p> elements inside ".container" and set their textAlign to 'center'.
//    Hint: document.querySelectorAll() returns a NodeList you can iterate with forEach().


// ── Exercise 2: Modifying Element Properties ────────────────────────────────

// 6. innerHTML – Select #content and set innerHTML to '<strong>Hello, World!</strong>'
//    Notice how the HTML tag is rendered.


// 7. innerText – Set innerText to '<strong>Hello, World!</strong>'
//    Notice how the HTML tag is shown as plain text.


// 8. textContent – Set textContent to '<strong>Hello, World!</strong>'
//    Compare the result with innerHTML and innerText.


// 9. Change Attribute
//    Select #link and use setAttribute('href', 'https://www.example.com') to update its URL.


// 10. Change Style
//     Select #box and set its width to '100px', height to '100px', and backgroundColor to 'green'.


// 11. Add / Remove / Toggle Class
//     Select #myElement, add the class 'active', then remove it, then try toggling it.


// ── Exercise 3: Creating and Appending Elements ──────────────────────────────

// 12. Create a new <div> element, set its textContent to 'New Element',
//     then append it to the element with id="container".

