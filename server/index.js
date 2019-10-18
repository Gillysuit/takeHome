const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const PORT = 3000;

app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/api/getUpdates", (req, res) => {
  const updatesURL =
    "https://gist.githubusercontent.com/Gillysuit/2c7b74b002cc831f047996f25a1a6391/raw/1099866ca50e2303a76ebc67f6b428b1b3decad9/releaseTester.md";

  fetch(updatesURL)
    .then(resp => resp.text())
    .then(gistData => {
      res.send(JSON.stringify(gistData.split("\n")));
    });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
