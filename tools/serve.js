const express = require("express");
const path = require("path");
const fs = require("node:fs");
const app = express();

const port = 8000;

app.use(express.json()); // parse json
app.use(express.static(path.join(__dirname, "../"))); // serve from root

app.listen(port, () => {
    console.log(`Serving on ${port}`);
});
