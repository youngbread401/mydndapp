document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("grid");

    // Create 100 squares (10x10 grid)
    for (let i = 0; i < 100; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Add click event listener to toggle the "clicked" class
        square.addEventListener("click", function () {
            square.classList.toggle("clicked");
        });

        // Add the square to the grid
        grid.appendChild(square);
    }
});

