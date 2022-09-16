const path = require("path");
const express = require("express");
const app = express();

const myport =  process.env.PORT || 3000;

const antidos = require("./antidos.js");
app.use(
  antidos({
    //maxTime: 100,
    //maxCount: 10,
    //     hardMode: 5
    consoleDebug: false,
  })
);

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src https: 'self' data: 'unsafe-inline' 'unsafe-eval' ws:"
  );
  next();
});

app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen( myport , () => {
  console.log(
    `Application listening on port ${myport} open url http://127.0.0.1:${myport} `
  );
});
