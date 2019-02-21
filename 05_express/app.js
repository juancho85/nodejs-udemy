const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    const method = req.method;
    const path = req.path;
    console.log(`Add product [method: ${method}][method: ${path}]`);
    res.send('<h1>Add product path</h1>');
});

app.use('/', (req, res, next) => {
    const method = req.method;
    const path = req.path;
    console.log(`Root path [method: ${method}][method: ${path}]`);
    res.send(`<h1>Hello path ${path}</h1>`);
});

const server = http.createServer(app);
server.listen(3000);