# To-Do List App

A dynamic and responsive To-Do List application with support for **Light** and **Dark Modes**, **multilingual translations**, customizable themes, and Material Icons. This project is designed to provide a smooth and interactive user experience with clean, modern aesthetics.

---

## 🌟 Features

- **Task Management**: Add, delete, and organize your tasks with ease.
- **Dark and Light Modes**: Toggle between light and dark themes for better usability in any lighting condition.
- **Multilingual Support**: [Upcoming Feature] Easily switch between languages (e.g., English, Greek).
- **Customizable Themes**: Styled with CSS variables for easy customization.
- **Smooth Transitions**: Enhanced user experience with animations and transitions.
- **Material Icons**: Clean and modern icons for improved design consistency.
- **Responsive Design**: Fully functional across devices (mobile, tablet, desktop).

---

## 📸 Preview

### Light Mode:
![Light Mode Preview](https://github.com/user-attachments/assets/75788723-891d-405b-a9e4-72ace0e63302)

![Light Mode - Dialog Preview](https://github.com/user-attachments/assets/c8cf5848-6aa0-4e2c-a220-caef5e750b4a)




### Dark Mode:
![Dark Mode Preview](https://github.com/user-attachments/assets/ed6bf4e3-36d8-44aa-b18f-5b2c784bed79)

![Dark Mode - Dialog Preview](https://github.com/user-attachments/assets/3c7be3e6-c527-4901-a3d4-94c2989160ef)



---

## 💻 Technologies Used

- **HTML5**: Provides the structure and semantics.
- **CSS3**: Implements modern styling, responsiveness, and animations.
- **JavaScript (ES6)**: Powers interactivity, dynamic theme toggling, and local storage integration.
- **Material Icons**: Offers high-quality icons for better UI design.

---

## 🌐 Multilingual Translations

This app will soon support multiple languages with a toggle feature to switch between them seamlessly. Currently planned languages:

- **English**
- **Greek**

Translations will cover:

1. Button texts
2. Dialog messages
3. Placeholder texts

---

## 🚀 Getting Started

Follow these steps to set up and run the To-Do List app locally:

### Prerequisites
Ensure you have a modern browser and basic knowledge of HTML, CSS, and JavaScript.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/YourUsername/todo-list.git
    ```

2. Navigate to the project directory:
    ```bash
    cd todo-list
    ```

3. Open the `index.html` file in your browser to view the app:
    ```bash
    open index.html
    ```

---

## 📂 Project Structure


```text
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
│   │   ├── buttons.css
│   │   ├── container.css
│   │   ├── delete-dialog.css
│   │   ├── form.css
│   │   ├── global.css
│   │   ├── index.css
│   │   ├── list.css
│   │   ├── theme-toggle.css
│   │   ├── variables.css          # CSS for color variables (light & dark mode)
│   ├── material-icons/
│   │   ├── material-icons.css
│   │   ├── MaterialIcons-Regular.woff2
│   │   ├── MaterialIcons-Regular.woff
│   │   ├── MaterialIcons-Regular.ttf
│   │   ├── MaterialIcons-Regular.eot
│   │   ├── MaterialIcons-Regular.ijmap
│   │   ├── MaterialIcons-Regular.svg
│   ├── js/
│       ├── helpers.js
│       ├── index.js
│       ├── popupDialog.js
│       ├── theme.js               # Handles light/dark mode toggle
│       ├── TodoList.js
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

