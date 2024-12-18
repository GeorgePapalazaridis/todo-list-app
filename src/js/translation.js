"use strict";

let currentLanguage = "en";
let currentTranslation = {}; // object to store translations;

export async function loadTranslations(lang) {
    const url = `src/translations/${lang}.json`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to load ${lang} translations.`);
        }

        currentTranslation = await response.json();
        applyTranslations();
    } catch (error) {
        console.log("Failed to load translations:", error);
    }
}

function applyTranslations() {
    document.querySelectorAll("[data-translate-key]").forEach((element) => {
        const key = element.getAttribute("data-translate-key");
        const translation = currentTranslation[key];
        if (translation) {
            // Check if the element contains a Material Icon
            const icon = element.querySelector(".material-icons");
            if (icon) {
                // Update only the text after the icon
                element.innerHTML = `<span class="material-icons">${icon.textContent}</span> ${translation}`;
            } else {
                // If no icon, update the entire content
                element.textContent = translation;
            }
        }
    });

    // Update the input placeholder based on the selected language
    const inputField = document.getElementById("input-1");
    if (inputField) {
        inputField.placeholder = currentTranslation["addTaskPlaceholder"] || "";
    }
}

export function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "gr" : "en";
    loadTranslations(currentLanguage);
}
