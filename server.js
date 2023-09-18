const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send(`
  <div>
  <h1>99 Bottles of beer on the wall!</h1>
  <a href="/98">Take one down, pass it around</a>
  </div>`);
});

app.get("/:number_of_bottles", function (req, res) {
  const { number_of_bottles } = req.params;
  if (number_of_bottles - 1 === 0) {
    res.send(`
    <div>
    <h1>${number_of_bottles} Bottles of beer on the wall!</h1>
    <a href="/99">Take one down</a>
    </div>`);
    return;
  }
  res.send(`
    <div>
    <h1>${number_of_bottles} Bottles of beer on the wall!</h1>
    <a href="/${number_of_bottles - 1}">Take one down, pass it around</a>
    </div>`);
});

app.listen(3005, function () {
  console.log("Listening on port 3005");
});
