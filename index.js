const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
