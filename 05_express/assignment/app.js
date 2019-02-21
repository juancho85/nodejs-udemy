const http = require('http');

const express = require('express');
const app = express();

// app.use('/', (req, res, next) => {
//     // res.send('<h1>Hello Express</h1>');
//     console.log('Middleware 1');
//     next();
// });
//
// app.use('/', (req, res, next) => {
//     console.log('Middleware 2');
//     res.send('<h1>Hello Express</h1>');
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>The rest</h1>');
});

const server = http.createServer(app);
server.listen(3000);