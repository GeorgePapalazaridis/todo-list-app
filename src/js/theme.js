export function toggleTheme() {
    const isDarkMode =
        document.documentElement.getAttribute("data-theme") === "dark";

    // Toggle the theme
    if (isDarkMode) {
        document.documentElement.setAttribute("data-theme", "light");
        document.body.style.backgroundImage =
            "url('/assets/images/light-theme-bg.webp')";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        document.body.style.backgroundImage =
            "url('/assets/images/dark-theme-bg.webp')";
    }

    // Update the theme toggle icon
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    if (themeToggleIcon) {
        themeToggleIcon.textContent = isDarkMode ? "dark_mode" : "light_mode";
    }

    // Persist the selected theme in localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

export function initializeTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";

    document.documentElement.setAttribute("data-theme", savedTheme);

    document.body.style.backgroundImage =
        savedTheme === "dark"
            ? "url('/assets/images/dark-theme-bg.webp')"
            : "url('/assets/images/light-theme-bg.webp')";

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
