# Challenge Exercise - Quiz Application

## Task

Create a simple quiz application where users can select an answer to a series of questions. Based on the selected answer, display whether the answer is correct or wrong by changing the class of an element.

## Instructions

1. Create an HTML file with series of questions and multiple choice answers.
2. Add CSS classes `.correct` and `.wrong` with appropriate styling to indicate correct and wrong answers. Additional elements can be used to display the result.
3. Write JavaScript to handle the answer selection:
   - When an answer is selected, check if it is correct.
   - Add the `.correct` class to the element if the answer is correct.
   - Add the `.wrong` class to the element if the answer is wrong.
   - Ensure that only one class (`.correct` or `.wrong`) is applied at a time.

## Example

### HTML
```html
<div id="quiz">
  <p>What is the capital of France?</p>
  <button class="answer">Paris</button>
  <button class="answer">London</button>
  <button class="answer">Berlin</button>
  <button class="answer">Madrid</button>
</div>
<div id="result"></div>
```

### CSS
```css
.correct {
  color: green;
  font-weight: bold;
}

.wrong {
  color: red;
  font-weight: bold;
}
```

### JavaScript
```javascript
document.querySelectorAll('.answer').forEach(button => {
  button.addEventListener('click', () => {
    const result = document.getElementById('result');
    if (button.textContent === 'Paris') {
      result.textContent = 'Correct!';
      result.className = 'correct';
    } else {
      result.textContent = 'Wrong!';
      result.className = 'wrong';
    }
  });
});
```

### Additional Challenges

- Can the JavaScript be improved to handle multiple questions and answers?
- How can you reset the quiz to remove the result after each question?
- Can you add a score counter to keep track of correct answers?
- How can you display the final score at the end of the quiz?
- Can you add a timer to limit the time for each question?
