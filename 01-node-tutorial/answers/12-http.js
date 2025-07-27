const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to our Home Page");
    }
    if(req.url === "/about") {
        res.end("Here is our Short History");
    }
    res.end(`
        <h1>Sorry!</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">Back Home</a>
        `);
    });

    server.listen(5005);