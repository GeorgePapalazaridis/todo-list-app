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
            deleteDialog.showModal();

            // Remove previous event listeners to avoid stacking them
            confirmDeleteBtn.onclick = null;

            // Add a new click event listener for confirming the deletion
            confirmDeleteBtn.addEventListener("click", () => {
                if (typeof onConfirm === "function") {
                    onConfirm(); // Call the passed function (e.g., delete the task)
                }
                deleteDialog.close();
            });

            cancelDeleteBtn.addEventListener("click", () => {
                deleteDialog.close();
            });
        };
    } catch (error) {
        console.error("Failed to load the dialog: ", error);
    }
}
