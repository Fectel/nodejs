const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
  console.log(`Server running at {PORT}/`);
});
