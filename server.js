const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');


const app = express();
const server = http.Server(app);

const io = socketIO(server);

app.set('port', 5000);

app.use('/static', express.static(__dirname + '/static'));
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

io.on('connection', function(socket) {
    socket.on('disconnect', function() {
    });
});

// setInterval(function() {
//     io.sockets.emit('message', 'hi!');
// }, 1000);