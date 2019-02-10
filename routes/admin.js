const path = require('path');
const express = require('express');

const router = express.Router(); //Router() é do express

const rootDir = require('../util/path');

//array com products
const products = [];

//recebe o pedido em /admin/add-product e reencaminha-te com POST dos dados para /admin/add-product
//o mesmo path name '/admin/add-product' pode ser usado porque aqui é get
router.get('/add-product',(req,res,next) =>{

    //envia para o add-product.ejs o {pageTitle:'Add Product'}
    res.render('add-product', {
            pageTitle:'Add Product',
            path:'/admin/add-product',
            formsCSS:true,
            productCSS:true,
            activeAddProduct:true});

    //vantagem parar com os tipicos '../' ou '..'
   // res.sendFile(path.join(rootDir,'views','add-product.html'));

    //esta está deprecado, acima está uma maneira melhor
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));

    //este codigo deprecado encontra-se dentro da pasta HTML
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

//aqui logou o req.. e redirect outra vez para o '/'
//o mesmo path name '/admin/add-product' pode ser usado porque aqui é post
router.post('/add-product',(req,res,next)=>{

    //add ao array products um objecto key: title, value: req.body.title
    //o req.body.title é o valor da key, req->request,body->chunk que foi parsed,title->titulo
    products.push({title: req.body.title});
    res.redirect('/');
});

//usado em app.js => app.use('/admin',adminRoutes.routes);
exports.routes = router;
exports.products = products;

//antigo
//module.exports = router;