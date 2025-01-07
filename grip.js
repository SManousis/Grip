function makeGrid(size) {
    const container = document.getElementById("container");
    if (!container) {
        console.error("Container element not found!");
        return;
    }

    container.innerHTML = ""; // Clear existing grid

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.opacity = 0; // Initialize opacity to 0
        cell.addEventListener("mouseover", () => raiseOpacity(cell)); // Attach event listener
        container.appendChild(cell);
    }

    // Adjust CSS dynamically for grid size
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.flex = `1 0 calc(100% / ${size})`; // Adjust width
        cell.style.height = `calc(600px / ${size})`; // Adjust height
    });
}

const raiseOpacity = (cell) => {
    const currentOpacity = parseFloat(cell.style.opacity);
    if (currentOpacity < 1) {
        cell.style.opacity = currentOpacity + 0.1; // Increment opacity
    }
};
function handleGridSizeChange() {
    const input = prompt("Enter the number of squares per side (max: 100):");

    // Validate input
    const size = parseInt(input);
    if (isNaN(size) || size <= 0 || size > 100) {
        alert("Invalid input! Please enter a number between 1 and 100.");
        return;
    }

    makeGrid(size); // Call makeGrid with the valid size
}

// Ensure the DOM is loaded before running JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    button.addEventListener("click", handleGridSizeChange);

    makeGrid(4); // Create an initial 4x4 grid on page load
});