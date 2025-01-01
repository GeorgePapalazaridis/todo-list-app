export function toggleTheme() {
    const isDarkMode =
        document.documentElement.getAttribute("data-theme") === "dark";

    if (isDarkMode) {
        document.documentElement.setAttribute("data-theme", "light");
        document.body.classList.remove("dark-theme-bg");
        document.body.classList.add("light-theme-bg");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        document.body.classList.remove("light-theme-bg");
        document.body.classList.add("dark-theme-bg");
    }

    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    if (themeToggleIcon) {
        themeToggleIcon.textContent = isDarkMode ? "dark_mode" : "light_mode";
    }

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

export function initializeTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", savedTheme);
    document.body.classList.add(`${savedTheme}-theme-bg`);

    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    if (themeToggleIcon) {
        themeToggleIcon.textContent =
            savedTheme === "dark" ? "light_mode" : "dark_mode";
    }

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", toggleTheme);
    }
}
