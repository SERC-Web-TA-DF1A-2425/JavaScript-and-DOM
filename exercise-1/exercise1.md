# Exercise 1 - DOM Manipulation

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface that represents an HTML page as a tree of objects. When a browser loads an HTML page, it parses the markup and creates a live in-memory tree where every element, attribute, and piece of text becomes a **node** that JavaScript can read and modify.

```
document
└── <html>
    ├── <head>
    │   └── <title>
    └── <body>
        ├── <h1 id="header">
        ├── <p class="item">
        └── ...
```

**Why does this matter?**  
Because JavaScript can use the DOM to:
- **Select** any element on the page.
- **Read or change** its content, attributes, and styles.
- **Create** new elements and insert them into the page.
- **Remove** elements that are no longer needed.

All of this happens *without* reloading the page, which is what makes modern web applications feel fast and interactive.

### Key DOM selection methods

| Method | Returns | Selects by |
|--------|---------|-----------|
| `document.getElementById(id)` | Single element | `id` attribute |
| `document.getElementsByClassName(name)` | HTMLCollection | `class` attribute |
| `document.getElementsByTagName(tag)` | HTMLCollection | tag name |
| `document.querySelector(selector)` | First match | any CSS selector |
| `document.querySelectorAll(selector)` | NodeList | any CSS selector |

> **Note:** `HTMLCollection` and `NodeList` are array-like objects. Use a `for...of` loop or `.forEach()` to iterate over them.

---

## Setup

1. Open the `index.html` file in your browser to see the initial setup.
2. Open the `script.js` file in your code editor to write your JavaScript code.

## Exercise 1: Selecting Elements

1. **Select by ID**
   - Task: Select an element with the ID `header` and change its background color to blue.
   - Instructions: Use `document.getElementById` to select the element and then modify its `style.backgroundColor` property.
   ```javascript
   // Select the element with ID 'header' and change its background color to blue
   document.getElementById('header').style.backgroundColor = 'blue';
   ```

2. **Select by Class Name**
    - Task: Select all elements with the class name `item` and change their font size to 20px.
    - Instructions: Use `document.getElementsByClassName` to select the elements and then iterate over them to modify their `style.fontSize` property.
    - Note: class names can be used multiple times in a document, so `document.getElementsByClassName` returns a collection of elements.
    ```javascript
    // Select all elements with class 'item' and change their font size to 20px
    let items = document.getElementsByClassName('item');
    for (let item of items) {
         item.style.fontSize = '20px';
    }
    ```

3. **Select by Tag Name**
   - Task: Select all `<p>` elements and change their text color to red.
   - Instructions: Use `document.getElementsByTagName` to select the elements and then iterate over them to modify their `style.color` property.
   ```javascript
   // Select all <p> elements and change their text color to red
   let paragraphs = document.getElementsByTagName('p');
   for (let paragraph of paragraphs) {
       paragraph.style.color = 'red';
   }
   ```

4. **Select by Query Selector**
   - Task: Select the first element with the class `highlight` and change its border to 1px solid black.
   - Instructions: Use `document.querySelector` to select the element and then modify its `style.border` property. 
   - Note: `querySelector` returns the first element that matches the specified CSS selector.
   ```javascript
   // Select the first element with class 'highlight' and change its border to 1px solid black
   document.querySelector('.highlight').style.border = '1px solid black';
   ```

   - Additional Task: Select the first `<p>` element inside a container with the class `container` and change its font style to italic.
   - Instructions: Use `document.querySelector` with a more complex CSS selector to select the element and then modify its `style.fontStyle` property.
   ```javascript
   // Select the first <p> element inside a container with class 'container' and change its font style to italic
   document.querySelector('.container p').style.fontStyle = 'italic';
   ```

5. **Select by Query Selector All**
   - Task: Select all elements with the class `highlight` and change their margin to 10px.
   - Instructions: Use `document.querySelectorAll` to select the elements and then iterate over them to modify their `style.margin` property.
    - Note: `querySelectorAll` returns a collection of elements that match the specified CSS selector.
   ```javascript
   // Select all elements with class 'highlight' and change their margin to 10px
   let highlights = document.querySelectorAll('.highlight');
   highlights.forEach(highlight => {
       highlight.style.margin = '10px';
   });
   ```

   - Additional Task: Select all `<p>` elements inside a container with the class `container` and change their text alignment to center.
   - Instructions: Use `document.querySelectorAll` with a more complex CSS selector to select the elements and then iterate over them to modify their `style.textAlign` property.
   ```javascript
   // Select all <p> elements inside a container with class 'container' and change their text alignment to center
   let containerParagraphs = document.querySelectorAll('.container p');
   containerParagraphs.forEach(paragraph => {
       paragraph.style.textAlign = 'center';
   });
   ```

## Exercise 2: Modifying Element Properties

1. **Change Inner HTML**
   - Task: Select an element with the ID `content` and change its inner HTML to 'Hello, World!'.
   - Instructions: Use `document.getElementById` to select the element and then modify its `innerHTML` property.
   ```javascript
   // Select the element with ID 'content' and change its inner HTML to 'Hello, World!'
   document.getElementById('content').innerHTML = '<strong>Hello, World!</strong>';
   ```
   - Try this on the `.container` element as well.


2. **Change Inner Text**
   - Task: Select an element with the ID `content` and change its inner text to 'Hello, World!'.
   - Instructions: Use `document.getElementById` to select the element and then modify its `innerText` property.
   ```javascript
   // Select the element with ID 'content' and change its inner text to 'Hello, World!'
   document.getElementById('content').innerText = '<strong>Hello, World!</strong>';
   ```

3. **Change Text Content**
   - Task: Select an element with the ID `content` and change its text content to 'Hello, World!'.
   - Instructions: Use `document.getElementById` to select the element and then modify its `textContent` property.
   ```javascript
   // Select the element with ID 'content' and change its text content to 'Hello, World!'
   document.getElementById('content').textContent = '<strong>Hello, World!</strong>';
   ```
   - Try this on the `.container` element as well.

4. **Explanation of Differences**
   - `innerHTML`: Gets or sets the HTML markup contained within the element. It can parse HTML tags and render them.
   - `innerText`: Gets or sets the text content of the element, but it respects the CSS styling (e.g., `display: none` elements are not included).
   - `textContent`: Gets or sets the text content of the element, including all child elements, but it does not parse HTML tags.

5. **Change Attribute**
   - Task: Select an element with the ID `link` and change its `href` attribute to 'https://www.example.com'.
   - Instructions: Use `document.getElementById` to select the element and then use `setAttribute` to modify its `href` attribute.
   ```javascript
   // Select the element with ID 'link' and change its href attribute to 'https://www.example.com'
   document.getElementById('link').setAttribute('href', 'https://www.example.com');
   ```

6. **Change Style**
   - Task: Select an element with the ID `box` and change its width to 100px, height to 100px, and background color to green.
   - Instructions: Use `document.getElementById` to select the element and then modify its `style.width`, `style.height`, and `style.backgroundColor` properties.
   ```javascript
   // Select the element with ID 'box' and change its width, height, and background color
   let box = document.getElementById('box');
   box.style.width = '100px';
   box.style.height = '100px';
   box.style.backgroundColor = 'green';
   ```

7. **Add and Remove Class**
   - Task: Select an element with the ID `myElement` and add the class `active`, then remove the class `active`.
   - Instructions: Use `document.getElementById` to select the element and then use `classList.add` and `classList.remove` to modify its classes.
   ```javascript
   // Select the element with ID 'myElement' and add the class 'active'
   document.getElementById('myElement').classList.add('active');
   
   // Remove the class 'active' from the element with ID 'myElement'
   document.getElementById('myElement').classList.remove('active');
   ```

8. **Toggle Class**
   - Task: Select an element with the ID `myElement` and toggle the class `active`.
   - Instructions: Use `document.getElementById` to select the element and then use `classList.toggle` to modify its classes.
   ```javascript
   // Select the element with ID 'myElement' and toggle the class 'active'
   document.getElementById('myElement').classList.toggle('active');
   ```

## Exercise 3: Creating and Appending Elements

1. **Create Element**
   - Task: Create a new `<div>` element and set its text content to 'New Element'.
   - Instructions: Use `document.createElement` to create the element and then set its `textContent` property.
   ```javascript
   // Create a new <div> element and set its text content to 'New Element'
   let newElement = document.createElement('div');
   newElement.textContent = 'New Element';
   ```

2. **Append Element**
    - Task: Append the newly created element to the element with the ID `container`.
    - Instructions: Use `document.getElementById` to select the container element and then use `appendChild` to append the new element.
    ```javascript
    // Append the new element to the element with ID 'container'
    document.getElementById('container').appendChild(newElement);
    ```
