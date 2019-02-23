const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const users = ['Juan', 'Mara'];

app.get('/', (req, res, next) => {
    res.render('user-form');
});

app.post('/upload-user', (req, res, next) => {
    users.push(req.body.username);
    res.redirect('/users')
});


app.get('/users', (req, res, next) => {
    res.render('users', { users });
});

app.listen(3000);