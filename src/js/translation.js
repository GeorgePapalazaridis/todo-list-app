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
            element.textContent = translation;
        }
    });
}

export function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "gr" : "en";
    loadTranslations(currentLanguage);
}
