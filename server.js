const path = require("path");
const express = require("express");
const app = express();

let ipTables = {}; // массив IP адресов зергов
const maxTime = 10000; // 30000 = 3 sec  время проверки
const maxCount = 20; // макс кол-во запросов после 1 обращения за maxTime время
const hardMode = 5; // устанавливаем бан еще  на maxTime если достигнуто maxCount*hardMode
const antiDOS = (req, res, next) => {
  let ip = req.ip;
  let time = Date.now();

  if (ip in ipTables) {
    if (time - ipTables[ip].time > maxTime) {
      ipTables[ip] = {
        count: 0,
        time,
      };
    }

    ipTables[ip].count++;

    if (ipTables[ip].count > hardMode * maxCount) {
      ipTables[ip].time = ipTables[ip].time + ipTables[ip].count;
      return;
    }

    if (ipTables[ip].count > maxCount) {
      return;
    }
  } else {
    ipTables[ip] = {
      count: 1,
      time,
    };
  }
  next();
};

app.use(antiDOS);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(3000, () => {
  console.log(
    "Application listening on port 3000 opent url http://127.0.0.1:3000 "
  );
});

