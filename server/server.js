const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

console.log('Serving static from ${clientPath}');

app.use(express.static('../client'));

app.get('/', function(req, res, next) {
    res.send("Incorrect Path to Directory.");
});

const server = http.createServer(app);

// Will handle its own requests and not interfere express listener
const io = socketio(server);

io.on('connection', (sock) => {
    console.log('Someone connected');
    sock.emit('message', 'Hi, you are connected');

    sock.on('message', (text) => {
        io.emit('message', text);
    });
})

// Development
server.on('error', (err) => {
    console.error('Server error:', err);
});

server.listen(4200, () => {
    console.log('Break Judge started on 8080');
});