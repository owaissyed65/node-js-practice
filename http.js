const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('<h1>Home Page</h1>')    
    }
    else if(req.url === '/about'){
        res.end('<h1>About Page</h1>')    
    }
    res.end('<h1>OOps error <a href="/">home</a></h1>')    
});
server.listen(3000,()=>{
    console.log('open')
})

