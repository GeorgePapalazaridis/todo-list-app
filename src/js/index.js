import "./TodoList.js";
import { loadDialog } from "./PopupDialog.js";
import { initializeTheme } from "./theme.js";

loadDialog();

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
});
