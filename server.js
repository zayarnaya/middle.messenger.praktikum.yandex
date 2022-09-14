const path = require("path");
const express = require("express");
const app = express();

const antidos = require("./antidos.js");
app.use(
  antidos({
    maxTime: 1000,
    maxCount: 50,
    //     hardMode: 5
    consoleDebug: false,
  })
);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(3000, () => {
  console.log(
    "Application listening on port 3000 open url http://127.0.0.1:3000 "
  );
});
