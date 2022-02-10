const path = require('path');

const rootDir = require('../util/path');
const express = require('express');
const adminData = require('./admin');
const shop = express.Router();

shop.get('/', (req, res, next) => {
  //res.sendFile(path.join(rootDir,'views','shop.html'));
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Shop'});
});


module.exports = shop;