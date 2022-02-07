const path = require('path');

const rootDir = require('../util/path');
const express = require('express');
const shop = express.Router();

shop.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','shop.html'));
});


module.exports = shop;