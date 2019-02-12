const path = require('path');
const express = require('express');
const router = express.Router(); //Router() é do express

//importa de /controllers/products.js
const productsController = require('../controllers/products');



//recebe o pedido em /admin/add-product e reencaminha-te com POST dos dados para /admin/add-product
//o mesmo path name '/admin/add-product' pode ser usado porque aqui é get
//productsController.getAddProduct <- função recebida de ../controllers/products
router.get('/add-product',productsController.getAddProduct);

//aqui logou o req.. e redirect outra vez para o '/'
//o mesmo path name '/admin/add-product' pode ser usado porque aqui é post
//productsController.postAddProduct <- função recebida de ../controllers/products
router.post('/add-product',productsController.postAddProduct);



module.exports = router;