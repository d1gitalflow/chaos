//exportar para dentro de router.get() callback (bloco de codigo gera a pagina AddProduct)
//exportar para dentro de router.post() callback (bloco de codigo gera a pagina PostAddProduct)

const Product = require('../models/product');


//router.get('/add-product',productsController.getAddProduct);
exports.getAddProduct = (req,res,next) =>{

    //envia para o add-product.ejs o {pageTitle:'Add Product'}
    res.render('add-product', {
        pageTitle:'Add Product',
        path:'/admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeAddProduct:true});


};
//router.post('/add-product',productsController.postAddProduct);
exports.postAddProduct = (req,res,next)=>{

    //criar novo product baseado na Product class
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};
//router.get('/',productsController.getProducts);
exports.getProducts = (req,res,next) => {

    //Product.fetchAll(); faz uso da função static fetchAll() em models/product.js
    const products = Product.fetchAll();


    //render() é do expressjs
    //'shop' ou nao é preciso shop.pug
    //file app.js está lá:
    //app.set('view engine','pug');
    //app.set('views',);
    //passar como objecto o array products
    //path:'/' <- ver em main-layouts.
    //hasProducts:products.length>0 <= ver em shop.ejs
    res.render('shop',
        {
            prods: products,
            pageTitle:'My Shop',
            path: '/',
            hasProducts:products.length>0,
            activeShop:true,
            productCSS:true

        });
};