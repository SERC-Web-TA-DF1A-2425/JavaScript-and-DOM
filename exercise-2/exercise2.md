# Exercise 2 - Event Handlers

## What are Event Handlers?

Browsers constantly emit **events** – signals that something has happened, such as a user clicking a button, moving the mouse, pressing a key, or a page finishing loading. **Event handlers** (also called event listeners) are JavaScript functions that run in response to these signals.

### Why use event handlers?

Without event handlers, a web page is static – it looks the same no matter what the user does. Event handlers are what make pages *interactive*: a button that shows a menu, a form that validates input as you type, an image gallery that changes pictures on click.

### Two ways to attach an event handler

**1. Inline (in the HTML)**  
The handler is written directly as an HTML attribute. This is quick but mixes HTML and JavaScript, which makes code harder to maintain.

```html
<button onclick="alert('Clicked!')">Click me</button>
```

**2. Declared (in JavaScript with `addEventListener`)**  
The handler is registered from JavaScript. This keeps HTML and JS separate and allows multiple listeners on the same event.

```javascript
document.getElementById('myButton').addEventListener('click', function() {
    alert('Clicked!');
});
```

> **Best practice:** Prefer `addEventListener` for real projects. Inline handlers are shown here for learning purposes only.

### Common event types

| Event | Fires when… |
|-------|-------------|
| `click` | The user clicks an element |
| `mouseover` | The mouse pointer moves onto an element |
| `mouseout` | The mouse pointer moves off an element |
| `input` | The value of an input field changes |
| `submit` | A form is submitted |
| `keydown` | A key is pressed |

---

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
