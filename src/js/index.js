import "./TodoList.js";
import { loadDialog } from "./popupDialog.js";
import { initializeTheme } from "./theme.js";
import { loadTranslations, toggleLanguage } from "./translation.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadDialog();
    initializeTheme();

    // Load default language translations on page load
    const defaultLanguage = "en";
    await loadTranslations(defaultLanguage);

    // Add event listener to language toggle button
    const languageToggleBtn = document.getElementById("language-toggle-btn");
    if (languageToggleBtn) {
        languageToggleBtn.addEventListener("click", toggleLanguage);
    }
});
