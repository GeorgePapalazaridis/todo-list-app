"use strict";

const ADD_BTN_SELECTOR = ".btn[aria-label='Add a new task']";
const CLEAR_BTN_SELECTOR = ".btn[aria-label='Clear the input field']";

class TodoList {
    constructor(containerSelector) {
        // Check if we are in a testing environment
        if (typeof document === "undefined") {
            return; // Exit if document is not available (e.g., during tests)
        }

        // Scope all elements to the provided containerSelector
        const container = document.querySelector(containerSelector);

        if (!container) {
            throw new Error(
                `Container with selector "${containerSelector}" not found.`
            );
        }

        this.input = container.querySelector(".input");
        this.btnAdd = container.querySelector(ADD_BTN_SELECTOR);
        this.btnClear = container.querySelector(CLEAR_BTN_SELECTOR);
        this.listGroupItems = container.querySelector(".todo-list");

        // Ensure all elements exist in the container
        if (
            !this.input ||
            !this.btnAdd ||
            !this.btnClear ||
            !this.listGroupItems
        ) {
            throw new Error("Missing required elements in the container.");
        }

        this.initialize();
    }

    initialize() {
        // Add event listeners for buttons and input
        this.btnAdd.addEventListener("click", this.handleAddBtn.bind(this));
        this.btnClear.addEventListener("click", this.handleClearBtn.bind(this));
        this.listGroupItems.addEventListener(
            "click",
            this.handleListItemsDelete.bind(this)
        );
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.handleAddBtn(e);
            }
        });
    }

    handleAddBtn(e) {
        e.preventDefault();

        const inputValue = this.input.value.trim();
        if (!inputValue) {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.setAttribute("role", "listitem");

        // Wrap the task text in a span
        const taskText = document.createElement("span");
        taskText.textContent = inputValue;

        // Create the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn btn";

        // Append the span and button to the list item
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        // Add the list item to the list
        this.listGroupItems.appendChild(listItem);

        this.input.value = ""; // Clear the input field
    }

    handleClearBtn(e) {
        e.preventDefault();
        this.input.value = ""; // Clear the input field
    }

    handleListItemsDelete(e) {
        if (e.target.classList.contains("delete-btn")) {
            const listItem = e.target.parentElement;

            // Show the custom confirmation dialog
            window.showDeleteConfirmation(() => {
                listItem.remove(); // Remove the list item after confirmation
            });
        }
    }
}

export default TodoList;

new TodoList("#list-container-1");
