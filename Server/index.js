const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  console.log("Request received");
  res.write("Hello World");
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
