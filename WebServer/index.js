const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact Page");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.post("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
