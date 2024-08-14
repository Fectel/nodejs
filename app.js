const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const fs = require('fs');
const {createServer } = require('https');
const { Server } = require("socket.io");
const https = require('https');

const app = express()
    , server = https.createServer(
  {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
  },
    app).listen(3000, () =>{
  console.log("https Started")
})
  , io = io.listen(server);
server.listen(3000)
// console.log(app, "<--- APPP")

// const httpsServer = createServer({
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem')
// },app);
// const io = new Server(httpsServer);


// const PORT = 3000;

// socket.io working
io.on("connection", (socket) => {

  console.log("socket.io is connected")
})
// app.listen(PORT, () => {
//   console.log(`Server running at {PORT}/`);
// });
// httpsServer.listen(PORT, () => {
//   console.log(`Socket.io and Express Server running at ${PORT}`);
// });

app.get("/", (req, res) => {
    res.send("Hello World");
});

