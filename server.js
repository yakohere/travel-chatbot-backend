/*
 * Import packages
 */
const { bot } = require('./answer');

const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

var cors = require('cors');

const { Server } = require('socket.io');

var corsOptions = {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Pass the corsOptions to the Socket.IO Server
const io = new Server(server, {
  cors: corsOptions
});

app.use(cors(corsOptions));
app.use(express.static('public'));

server.listen(4000, function () {
    console.log("server started at port 4000");
});

io.on("connection", (socket) => {
    console.log('Client connected');

    socket.on("disconnect", (reason) => {
        console.log(`disconnect ${socket.id} due to ${reason}`);
    });

    socket.on("question", (msg) => {
        console.log('message: ' + msg);
        let answer = bot.travelBot(msg);
        socket.emit('answer', answer);
    });
});
