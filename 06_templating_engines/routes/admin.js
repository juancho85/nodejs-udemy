const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// Implicitly: /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product'});
});

// Implicitly: /admin/add-product
router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;