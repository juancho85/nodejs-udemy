const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// Implicitly: /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// Implicitly: /admin/add-product
router.post('/add-product', (req, res, next) => {
    const method = req.method;
    const path = req.path;
    const body = req.body;
    console.log(body);
    res.redirect('/');
});

module.exports = router;