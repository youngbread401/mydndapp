const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the static files from the "public" folder
app.use(express.static('public'));

// Route to serve the index.html page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Listen for connections
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Listen for clicks from the client
  socket.on('click', (data) => {
    // Broadcast the click event to all other connected clients
    socket.broadcast.emit('click', data);
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
