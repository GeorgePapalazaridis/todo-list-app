"use strict";

export async function loadDialog() {
    const url = "src/components/deleteConfirmationDialog.html";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load "${url}".`);
        }

        const html = await response.text();
        const dialogContainer = document.getElementById("dialog-container");
        dialogContainer.innerHTML = html;

        const deleteDialog = document.getElementById(
            "delete-confirmation-dialog"
        );
        const confirmDeleteBtn = document.getElementById(
            "confirmation-dialog-delete"
        );
        const cancelDeleteBtn = document.getElementById(
            "confirmation-dialog-cancel"
        );

        if (!deleteDialog || !confirmDeleteBtn || !cancelDeleteBtn) {
            throw new Error("Dialog elements were not loaded correctly.");
        }

        window.showDeleteConfirmation = (onConfirm) => {
            deleteDialog.classList.remove("closing"); // Remove closing class if present
            deleteDialog.showModal(); // Open the dialog first

            // Use a small delay to ensure the dialog is open before applying the `opening` class
            setTimeout(() => {
                deleteDialog.classList.add("opening");
            }, 10);

            confirmDeleteBtn.onclick = null; // Clear any previous listeners

            confirmDeleteBtn.addEventListener("click", () => {
                if (typeof onConfirm === "function") {
                    onConfirm();
                }
                closeDialog();
            });

            cancelDeleteBtn.addEventListener("click", closeDialog);
        };

        const closeDialog = () => {
            deleteDialog.classList.remove("opening");
            deleteDialog.classList.add("closing");

            setTimeout(() => {
                deleteDialog.close();
                deleteDialog.classList.remove("closing");
            }, 300); // Matches the CSS transition duration
        };
    } catch (error) {
        console.error("Failed to load the dialog: ", error);
    }
}
