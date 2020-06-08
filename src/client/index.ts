import io from 'socket.io-client';
import { hey } from '../common';


hey();

const socket = io();

socket.on('message', function(data: object) {
    console.log(data);
});