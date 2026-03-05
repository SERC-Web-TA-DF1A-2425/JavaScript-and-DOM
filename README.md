# JavaScript and DOM

Lab exercises on using JavaScript to manipulate the Document Object Model

## Getting Started

### Option 1 – GitHub Codespaces (recommended, no local setup needed)

1. Click the green **Code** button at the top of this repository page.
2. Select the **Codespaces** tab.
3. Click **Create codespace on main** (or your current branch).
4. Wait for the Codespace to build. A browser-based VS Code editor will open with the repository already loaded.
5. You can now edit files directly in the browser and preview them using the built-in port forwarding or the Live Server extension.

### Option 2 – Clone the repository locally

**Prerequisites:** [Git](https://git-scm.com/) and a code editor (e.g. [VS Code](https://code.visualstudio.com/)) installed on your machine.

1. Open a terminal and run:
   ```bash
   git clone https://github.com/SERC-Web-TA-DF1A-2425/JavaScript-and-DOM.git
   ```
2. Navigate into the cloned folder:
   ```bash
   cd JavaScript-and-DOM
   ```
3. Open the folder in your editor, for example:
   ```bash
   code .
   ```

## Running JavaScript in the Browser

Each exercise contains an `index.html` file. To run the code:

1. Open the relevant `index.html` file in your web browser.
   - **Locally:** double-click the file in your file explorer, or right-click → *Open with* → your browser.
   - **In a Codespace / VS Code:** install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `index.html`, and choose **Open with Live Server**.
2. The page will load and execute any linked JavaScript files automatically.

### Viewing the Console in Developer Tools

The browser's developer console lets you see `console.log()` output, errors, and warnings from your JavaScript code.

| Browser | Shortcut to open DevTools |
|---------|--------------------------|
| Chrome / Edge | `F12` or `Ctrl + Shift + J` (Windows/Linux) / `Cmd + Option + J` (macOS) |
| Firefox | `F12` or `Ctrl + Shift + K` (Windows/Linux) / `Cmd + Option + K` (macOS) |
| Safari | `Cmd + Option + C` (enable the Develop menu first in *Preferences → Advanced*) |

Once DevTools is open:
- Click the **Console** tab to view log output and errors.
- You can type JavaScript expressions directly into the console prompt and press **Enter** to run them.
- Errors in your code appear in red with a file name and line number – click on them to jump straight to the source.

## Exercises

- [Exercise 1 - DOM Manipulation](./exercise-1/exercise1.md)
- [Exercise 2 - Event Handlers](./exercise-2/exercise2.md)
- [Exercise 3 - Form Validation](./exercise-3/exercise3.md)
- [Challenge Exercise - Quiz Application](./challenge/challenge.md)
