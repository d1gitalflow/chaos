const path = require('path');
const express = require('express');
const router = express.Router();

//importa de /controllers/products.js
const productsController = require ('../controllers/products');

//este path '/' é executado em 1º lugar
router.get('/',productsController.getProducts);


module.exports = router;
