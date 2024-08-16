const express = require('express');
const fs = require('fs');
const { Server } = require("socket.io");
const https = require('https');
const WebSocket = require('ws');


const app = express()
    , server = https.createServer(
  {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
  },
    app)
    // ,  io = new Server(server, {origins: '*:*'})


    const wss = new WebSocket.Server({server});
   
server.listen(2096)
app.listen(server)
wss.on('connection', function connection(ws) {
  console.log("WS is Connected!!")
})

// io.on("connection", (socket) => {

//   console.log("socket.io is connected")
// })
app.get("/", (req, res) => {
  console.log("app.get")
    res.send("Hello World");
});


