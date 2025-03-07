# Exercise 2 - Event Handlers

Series of exercises to practice basic event handlers.

## Setup

1. Open the `index.html` file in your browser to see the initial setup.
2. Open the `script.js` file in your code editor to write your JavaScript code.

## Exercise 1: Inline Event Handlers

1. **Click Event**
   - Task: Add an inline `onclick` event to a button that changes the text of an element with the ID `message` to 'Button Clicked!'.
   - Instructions: Add the `onclick` attribute directly to the button element in the HTML file.
   ```html
   <!-- Add this to the button element in index.html -->
   <button id="myButton" onclick="document.getElementById('message').innerText = 'Button Clicked!'">Click Me</button>
   ```

2. **Mouse Over Event**
   - Task: Add an inline `onmouseover` event to a div that changes its background color to yellow.
   - Instructions: Add the `onmouseover` attribute directly to the div element in the HTML file.
   ```html
   <!-- Add this to the div element in index.html -->
   <div id="hoverDiv" onmouseover="this.style.backgroundColor = 'yellow'">Hover over me</div>
   ```

## Exercise 2: Declared Event Handlers

1. **Click Event**
   - Task: Add a click event handler to a button that changes the text of an element with the ID `message` to 'Button Clicked!'.
   - Instructions: Use `addEventListener` to add the event handler in the `script.js` file.
   ```javascript
   document.getElementById('myButton').addEventListener('click', function() {
       document.getElementById('message').innerText = 'Button Clicked!';
   });
   ```

2. **Mouse Over Event**
   - Task: Add a mouse over event handler to a div that changes its background color to yellow.
   - Instructions: Use `addEventListener` to add the event handler in the `script.js` file.
   ```javascript
   document.getElementById('hoverDiv').addEventListener('mouseover', function() {
       this.style.backgroundColor = 'yellow';
   });
   ```

3. **Mouse Out Event**
   - Task: Add a mouse out event handler to the same div that changes its background color back to its original color.
   - Instructions: Use `addEventListener` to add the event handler in the `script.js` file.
   ```javascript
   document.getElementById('hoverDiv').addEventListener('mouseout', function() {
       this.style.backgroundColor = '';
   });
   ```

## Challenge Tasks

1. **Toggle Text**
   - Task: Create a button that toggles the text of an element with the ID `toggleMessage` between 'Hello' and 'Goodbye' each time it is clicked.
   - Instructions: Add an event listener to the button in the `script.js` file.
   ```javascript
   document.getElementById('toggleButton').addEventListener('click', function() {
       let toggleMessage = document.getElementById('toggleMessage');
       if (toggleMessage.innerText === 'Hello') {
           toggleMessage.innerText = 'Goodbye';
       } else {
           toggleMessage.innerText = 'Hello';
       }
   });
   ```

2. **Change Image Source**
   - Task: Create a button that changes the source of an image with the ID `myImage` to a different image URL when clicked.
   - Instructions: Add an event listener to the button in the `script.js` file.
   ```javascript
   document.getElementById('changeImageButton').addEventListener('click', function() {
       document.getElementById('myImage').src = 'new-image-url.jpg';
   });
   ```
