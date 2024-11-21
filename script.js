"use strict";

class TodoList {
    constructor(containerSelector) {
        // Scope all elements to the provided containerSelector
        const container = document.querySelector(containerSelector);

        this.input = container.querySelector(".input");
        this.btnAdd = document.getElementById("add-btn");
        this.btnClear = document.getElementById("clear-btn");

        // this.btnAdd = container.querySelector(
        //     ".btn[aria-label='Add a new task']"
        // );
        // this.btnClear = container.querySelector(
        //     ".btn[aria-label='Clear the input field']"
        // );
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
            this.handleListItems.bind(this)
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

    handleListItems(e) {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove(); // Remove the task
        }
    }
}

// Instantiate the TodoList class for the specific container
new TodoList("#list-container-1");
