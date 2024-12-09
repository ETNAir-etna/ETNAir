const express = require("express");

const app = express();
const port = 3000;

app.get("/mama_testing", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
