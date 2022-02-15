const path = require('path');

const rootDir = require('../util/path');
const express = require('express');
const adminData = require('./admin');
const shop = express.Router();

shop.get('/', (req, res, next) => {
  //res.sendFile(path.join(rootDir,'views','shop.html'));
  const products = adminData.products;
  console.log('products',products,' length:',products.length);
  res.render('shop', {
    prods: products, 
    pageTitle: 'Shop',
    path:'/',
    hasProduct: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});


module.exports = shop;