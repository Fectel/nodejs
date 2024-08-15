const express = require('express');
const fs = require('fs');
const { Server } = require("socket.io");
const https = require('https');

const app = express()
    , server = https.createServer(
  {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
  },
    app)
    ,  io = new Server(server)
server.listen(3000)
app.listen(server)

io.on("connection", (socket) => {

  console.log("socket.io is connected")
})
app.get("/", (req, res) => {
  console.log("app.get")
    res.send("Hello World");
});


