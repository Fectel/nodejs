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
    ,  io = new Server(server, {
      cors: {
        origin: "https://mariachichingon.com/",
        methods: ['GET', 'POST']

      }
    })

// app.listen(3000)
// server.listen(app)
server.listen(2096)
app.listen(server)

io.on("connection", (socket) => {

  console.log("socket.io is connected")
})
app.get("/", (req, res) => {
  console.log("app.get")
    res.send("Hello World");
});


