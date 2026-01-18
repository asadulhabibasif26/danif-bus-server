const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Danif Bus server is running..............");
});

app.listen(port, () => {
  console.log(`Danif Bus server is running on port number : `, port);
});