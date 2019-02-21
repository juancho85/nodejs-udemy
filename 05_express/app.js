const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    const method = req.method;
    const path = req.path;
    console.log(`Middleware 1 [method: ${method}][method: ${path}]`);
    next();
});

app.use((req, res, next) => {
    const method = req.method;
    const path = req.path;
    console.log(`Middleware 2 [method: ${method}][method: ${path}]`);
    res.send('<h1>Hello</h1>');

});

const server = http.createServer(app);
server.listen(3000);