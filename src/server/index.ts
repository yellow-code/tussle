import express from 'express';
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';


const app = express();
const server = http.createServer(app);

const io = socketIO(server);

app.set('port', 5000);

const dirname = process.cwd();

app.use('/static', express.static(dirname + '/build/client'));
app.get('/', (request, response) => {
    response.sendFile(path.join(dirname, 'index.html'));
});

server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

io.on('connection', function(socket) {
    socket.on('disconnect', function() {
    });
});

setInterval(function() {
    io.sockets.emit('message', 'hi!');
}, 1000);