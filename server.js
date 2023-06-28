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
    origin: 'https://witty-pond-0966b9610.3.azurestaticapps.net',
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

app.get('/api/health', (req, res) => {
    res.json({ status: 'UP' });
});

const port = process.env.PORT || 4000; // fallback to 4000 if process.env.PORT is not available
server.listen(port, () => console.log(`Listening on port ${port}`));

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
