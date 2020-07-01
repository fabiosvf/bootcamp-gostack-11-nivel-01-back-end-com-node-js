const express = require("express");

const app = new express();

app.get("/", (request, response) => {
  return response.send("Hello World");
});

app.listen(3333);
