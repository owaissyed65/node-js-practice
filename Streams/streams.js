const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./forPath/big.txt", {highWaterMark:90000,encoding:'utf8'});
    fileStream.on('open',(d)=>{
        fileStream.pipe(res)
    })
    fileStream.on('data',(data)=>{
        console.log(data)
    })
  });
server.listen(3000);
