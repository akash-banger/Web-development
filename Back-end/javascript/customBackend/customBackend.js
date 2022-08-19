const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync("index.html");
const Tasks = fs.readFileSync("Tasks.html");
const wallpapers = fs.readFileSync("wallpapers.html");

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }else if(url == '/Tasks'){
        res.end(Tasks);
    }else if(url == 'wallpapers'){
        res.end(wallpapers);
    }else{
        res.statusCode = 404;
        res.end('<h1>404 not found</h1>');
    }
    // here we are doing much struggle by writing if and else statements
    // but further we can use express framework of nodejs which will help us 
    // to live our life properly 

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


 