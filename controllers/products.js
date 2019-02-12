//exportar para dentro de router.get() callback (bloco de codigo gera a pagina AddProduct)
//exportar para dentro de router.post() callback (bloco de codigo gera a pagina PostAddProduct)

//array com products, movido do admin.js para receber o push dentro deste file
const products = [];

exports.getAddProduct = (req,res,next) =>{

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
};

exports.postAddProduct = (req,res,next)=>{

    //add ao array products um objecto key: title, value: req.body.title
    //o req.body.title é o valor da key, req->request,body->chunk que foi parsed,title->titulo
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProduct = (req,res,next) => { //next() veio para aqui por ter o mesmo caminho

    //recebe array 'products' de admin.js via export
    //const products = adminData.products;


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
        {
            prods: products,
            pageTitle:'My Shop',
            path: '/',
            hasProducts:products.length>0,
            activeShop:true,
            productCSS:true

        });
};