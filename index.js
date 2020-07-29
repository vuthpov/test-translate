const express = require("express");
const app = express();
const port = 4000;
var cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const fs = require("fs");
app.get("/translate", (req, res) => {
  const filePath = `./static/locales/${req.query.lang}/${req.query.ns}.json`;

  fs.readFile(filePath, "utf8", (err, data) => {
    res.set("Content-Type", "application/json");
    res.send(data);
  });
});

app.get("/", (_, res) => {
  res.send("hello");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
