// app.js
document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("grid");

    for (let i = 0; i < 100; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Add event listener to toggle clicked state
        square.addEventListener("click", function () {
            square.classList.toggle("clicked");
        });

        grid.appendChild(square);
    }
});
