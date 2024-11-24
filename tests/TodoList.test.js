import TodoList from "../src/js/TodoList.js";

describe("TodoList Class", () => {
    let todoList;

    beforeEach(() => {
        // Set up the mock DOM structure
        document.body.innerHTML = `
            <div id="list-container-1" class="todo-list-container">
                <input type="text" class="input" />
                <button class="btn" aria-label="Add a new task">Add</button>
                <button class="btn" aria-label="Clear the input field">Clear</button>
                <ul class="todo-list"></ul>
            </div>
        `;

        // Create a new instance of the TodoList class
        todoList = new TodoList("#list-container-1");
    });

    test("should initialize with correct DOM elements", () => {
        expect(todoList.input).not.toBeNull();
        expect(todoList.btnAdd).not.toBeNull();
        expect(todoList.btnClear).not.toBeNull();
        expect(todoList.listGroupItems).not.toBeNull();
    });

    test("should add a task to the list", () => {
        todoList.input.value = "Test Task";
        todoList.handleAddBtn(new Event("click"));

        expect(todoList.listGroupItems.children.length).toBe(1);
        expect(todoList.listGroupItems.children[0].textContent).toContain(
            "Test Task"
        );
    });

    test("should clear the input field", () => {
        todoList.input.value = "Test Task";
        todoList.handleClearBtn(new Event("click"));

        expect(todoList.input.value).toBe("");
    });

    test("should remove a task from the list", () => {
        todoList.input.value = "Test Task";
        todoList.handleAddBtn(new Event("click"));

        const deleteButton =
            todoList.listGroupItems.querySelector(".delete-btn");
        deleteButton.click();

        expect(todoList.listGroupItems.children.length).toBe(0);
    });
});
