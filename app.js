const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = 3000;



const fs = require('fs');
const {createServer } = require('https');
const { Server } = require("socket.io");
const httpsServer = createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
},app);

// socket.io working
io.on("connection", (socket) => {

  console.log("socket.io is connected")
})


app.get("/", (req, res) => {
    res.send("Hello World");
});


// app.listen(PORT, () => {
//   console.log(`Server running at {PORT}/`);
// });
httpsServer.listen(PORT, () => {
  console.log(`Socket.io and Express Server running at {PORT}/`);
});
