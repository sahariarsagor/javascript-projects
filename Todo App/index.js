const http = require('http');
const fs = require('fs');
const PORT = 3080;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        fs.readFile("index.html", (err, data) =>{
            if(err){
                console.log(err);
            } else{
                // res.writeHead(200, {"Content-Type":"text/html"});
                res.write(data);
                res.end();
            }
        })
    }
});

server.listen(PORT, ()=>{
    console.log(`server successfully run at http://${hostName}:${PORT}`);
})