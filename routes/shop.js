const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

//acede ao admin.js ./ é para procurar mesma pasta
const adminData = require('./admin');



//este path '/' é executado em 1º lugar
router.get('/',(req,res,next) => { //next() veio para aqui por ter o mesmo caminho

    //recebe array 'products' de admin.js via export
    const products = adminData.products;


    //adminData vem do require no topo e o products vem do exports.products = products; (file admin.js)
    //console.log('shop.js',adminData.products);

    //path (core module nodejs)
    //join(concatenar)
    //__dirname (variavel global do nodejs que guarda o caminho absoluto, está apontar para 'routes' folder (porque está a ser usado em shop.js) para resolver ->
    //usar '../' para subir um nivel (sair da pasta routes e procurar views).
    //finalmente o nome dos ficheiros separados por ','
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));

    //nova versão de aceder ao path (igual no admin.js)
    //em caso de duvidas ver comments no 'admin.js'
    //res.sendFile(path.join(rootDir,'views','shop.html'));

    //render() é do expressjs
    //'shop' ou nao é preciso shop.pug
    //file app.js está lá:
    //app.set('view engine','pug');
    //app.set('views',);
    //passar como objecto o array products
    //path:'/' <- ver em main-layouts.
    //hasProducts:products.length>0 <= ver em shop.ejs
    res.render('shop',
        {prods: products,
            pageTitle:'Minha Shop',
            path: '/',
            hasProducts:products.length>0,
            activeShop:true,
            productCSS:true

    });
});


module.exports = router;
