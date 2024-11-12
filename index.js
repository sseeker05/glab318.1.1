const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  } else if (url === "/about") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>This is the about page!</p>');
    res.end();
  } else if (url === "/contact") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>this is the contact page</h1>');
    res.write('<p>Get in touch</p>');
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});