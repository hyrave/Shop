const path = require('path');

const rootDir = require('../util/path');
const express = require('express');
const adminData = require('./admin');

const shop = express.Router();

shop.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path:'/'
  });
});


module.exports = shop;