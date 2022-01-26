const express = require("express");

const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "front", "static")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "index.html"));
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on 5060 Port");
});
