const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const solve = require("./functions.js");
app.use(express.static("./public"))

app.get("/api/:parent1/:parent2", (req, res, next) => {
  res.send(solve([req.params.parent1, req.params.parent2]));
});
app.listen(port, () => console.log(`Application running on port: ${port}`));
