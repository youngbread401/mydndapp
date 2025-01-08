document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("grid");
    const socket = io(); // Connect to the Socket.io server

    // Create 100 squares (10x10 grid)
    for (let i = 0; i < 100; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Add click event listener to toggle the "clicked" class
        square.addEventListener("click", function () {
            // Toggle the class locally
            square.classList.toggle("clicked");

            // Emit the click event to the server
            socket.emit('click', {
                id: i, // We send the square ID to identify it
                clicked: square.classList.contains("clicked")
            });
        });

        // Add the square to the grid
        grid.appendChild(square);
    }

    // Listen for 'click' events from other users
    socket.on('click', function (data) {
        const square = grid.children[data.id];
        if (square) {
            if (data.clicked) {
                square.classList.add("clicked");
            } else {
                square.classList.remove("clicked");
            }
        }
    });
});

