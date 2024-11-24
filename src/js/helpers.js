// Create a new DOM element
export function createElement(tag, attributes = {}, textContent = "") {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach((key) => {
        element[key] = attributes[key];
    });
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}
