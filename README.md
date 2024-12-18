# To-Do List App

A dynamic and responsive To-Do List application featuring **Light and Dark Modes**, **multilingual translations**, customizable themes, and Material Icons. Built for users seeking a smooth and interactive experience with modern UI design.

---

## 🌟 Features

-   **Task Management**: Add, delete, and organize tasks effortlessly.
-   **Dark and Light Modes**: Toggle themes to match your environment.
-   **Multilingual Support**: Switch between supported languages (English and Greek).
-   **Customizable Themes**: Easily adjustable with CSS variables.
-   **Smooth Transitions**: Enjoy animations for theme and language toggling.
-   **Material Icons**: High-quality icons enhance the UI aesthetics.
-   **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.

---

## 📸 Preview

### Light Mode

![Light Mode Preview](https://github.com/user-attachments/assets/c2815fe2-a36d-4a1d-b7d8-419ef977d386)


![Light Mode - Dialog Preview](https://github.com/user-attachments/assets/c4747a17-00b8-464e-9c8f-598729cb8c42)


### Dark Mode

![Dark Mode Preview](https://github.com/user-attachments/assets/7512302d-1dc4-48ca-8769-78bd43c02025)


![Dark Mode - Dialog Preview](https://github.com/user-attachments/assets/6575553f-3087-4be5-a244-eb0a49636856)


---

## 💻 Technologies Used

-   **HTML5**: Semantic structure.
-   **CSS3**: Styling and responsive design.
-   **Vanilla JavaScript**: Interactivity, dynamic themes, and local storage.
-   **Material Icons**: Enhancing UI consistency.

---

## 🌐 Multilingual Translations

Switch between languages with ease! Supported languages:

-   **English**
-   **Greek**

Translated elements:

1. Button texts
2. Dialog messages
3. Placeholder texts

---

## 🚀 Getting Started

Follow these steps to set up and run the To-Do List app locally:

### Prerequisites

-   A modern web browser.
-   Basic knowledge of HTML, CSS, and JavaScript.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/YourUsername/todo-list.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-list
    ```

3. Open the `index.html` file in your browser:
    ```bash
    open index.html
    ```

---

## 📂 Project Structure

```plaintext
todo-list-app/
├── assets/
│   └── images/
│       ├── dark-theme-bg.webp
│       ├── light-theme-bg.webp
├── node_modules/                   # Node.js modules (dependencies)
├── src/
│   ├── components/
│   │   └── deleteConfirmationDialog.html
│   ├── css/
│   │   ├── material-icons/
│   │   │   ├── material-icons.css
│   │   │   ├── MaterialIcons-Regular.woff2
│   │   │   ├── MaterialIcons-Regular.woff
│   │   │   ├── MaterialIcons-Regular.ttf
│   │   │   ├── MaterialIcons-Regular.eot
│   │   │   ├── MaterialIcons-Regular.ijmap
│   │   │   ├── MaterialIcons-Regular.svg
│   │   ├── buttons.css
│   │   ├── container.css
│   │   ├── delete-dialog.css
│   │   ├── footer.css
│   │   ├── form.css
│   │   ├── global.css
│   │   ├── index.css
│   │   ├── list.css
│   │   ├── theme-toggle.css
│   │   ├── variables.css          # CSS for color variables (light & dark mode)
│   ├── js/
│       ├── helpers.js
│       ├── index.js
│       ├── popupDialog.js
│       ├── theme.js               # Handles light/dark mode toggle
│       ├── translation.js         # Handles multilingual support
│       ├── TodoList.js
│   ├── translations/
│       ├── en.json                # English translations
│       ├── gr.json                # Greek translations
├── tests/
│   └── TodoList.test.js           # Unit tests for the To-Do list
├── .gitignore                      # Git ignore rules
├── babel.config.js                 # Babel configuration
├── index.html                      # Main entry point of the app
├── jest.config.js                  # Jest configuration
├── LICENSE                         # Project license
├── package.json                    # Node.js project metadata and dependencies
├── package-lock.json               # Dependency lock file
└── README.md                       # Project documentation
```
