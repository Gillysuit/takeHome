const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/api", (req, res) => {
  res.json("api response");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
