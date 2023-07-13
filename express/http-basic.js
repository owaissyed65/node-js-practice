const http = require("http");
let server = http.createServer((req, res) => {
    // if u have server like user request css , js browser so u have to read all of them and this is major issue to use nodejs 
    // but we use expressjs
  console.log(req.method);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home</h1>");
    res.end();
  }
  else if(req.url === "/about"){
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about</h1>");
    res.end();
  }
  else{
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Not found</h1>");
    res.end();
  }
});
server.listen(3000, () => {
  console.log(`port is running in http://localhost:${3000}`);
});
