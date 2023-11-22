const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    else if(req.url === '/about'){
        res.end('This is the about page');
    };
    res.end(`
    <h1>Oops!</h1>
    <p>This page doesn't exist</p>
    <a href="/">Home Page</a>`);
});

server.listen(5000);