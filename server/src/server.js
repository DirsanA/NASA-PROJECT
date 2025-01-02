const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000; // it is or if not specify in the enviroment use 8000 port

app.listen(function () {
  console.log(`the server is  listenning ${PORT}....`);
});
