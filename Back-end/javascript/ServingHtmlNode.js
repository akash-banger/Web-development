const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync("../../Front-end/html/crudApp.html");

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(fileContent)
})

server.listen(3000,'127.0.0.1',()=>{
    console.log("listening on port 3000");
})
