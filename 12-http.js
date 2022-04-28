const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page!");
  } else if (req.url === "/about") {
    res.end("dam you lil bish!");
  } else
    res.end(
      `<h1>oh... you lil bish...</h1>
    <a href="/">come on back now you lil bish...</a>`
    );
});

server.listen(5000);
