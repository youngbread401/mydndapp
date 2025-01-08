const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle cell toggle from any user
    socket.on('toggleCell', (data) => {
        console.log('Cell toggle:', data);
        io.emit('updateGrid', data.id, data.highlighted);  // Broadcast the updated highlight state
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
