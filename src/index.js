const express = require("express");

const app = new express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello GoStack" });
});

app.listen(3333);
