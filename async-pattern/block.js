
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} and ${j}`);
      }
    }
    res.write("<h1>About Page</h1>");
  }
  res.end('<h1>OOps error <a href="/">home</a></h1>');
});
server.listen(3000, () => {
  console.log("open");
});
