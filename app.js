const path = require('path');
const express = require('express');//exporta uma função
const bodyParser = require('body-parser'); //parser de requests
const app = express(); //função exportada, pode-se dizer que iniciou um "objecto"

//handlebars
//const expressHbs = require('express-handlebars');

//instalar handlebars
//extname:'hbs' <= para não ter este erro:Error: ENOENT: no such file or directory, open 'open/c:,etc,'
// app.engine(
//     'hbs',
//     expressHbs({layoutDir: 'views/layouts/',
//         defaultLayout:'main-layout',
//         extname:'hbs'
//     })
// ); //expressHbs é uma função que se pode chamar
app.set('view engine','ejs');
app.set('views','views');

//pug é built-in ... expressHandleBars não é built-in
//global configuration value (keys, config items)... ATENÇÃO AO SET
//pug tem supporte para o express, e auto regista-se com express
//app.set('view engine','pug');
//dir 'views' (era o nome) + 'views' que indica como na API express (n tenho certeza)
//app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//linha de parser de requests do 'body-parser'
app.use(bodyParser.urlencoded({extended: false}));

//express já vem com isto:
//express <-objecto
//.static method que serve ficheiros estaticos
//tem-se de passar um caminho que sirva files estaticas
//neste caso demos o caminho para pasta 'public'
app.use(express.static(path.join(__dirname,'public')));

//filtrar routes com neste caso /admin/...
//QUANDO SE USA .use  TER EM ATENÇÃO A ORDEM... é melhor
//usar os .get e .post
app.use('/admin',adminRoutes.routes); //vem do export do admin.js
app.use(shopRoutes);

//pagina 404 not found
app.use((req,res,next)=>{

    //render('404') vê logo no file 404.pug
    //render('404') vê logo no file 404.ejs e envia o objeto key 'pageTitle'
    res.status(404).render('404',{pageTitle:'Page not find!'});

    //por ser um erro não esquecer de ligar o .status(404)
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));

    //HTML servido em cima diretamente para a pasta error404.html
    //res.status(404).send('<h1>Page not found</h1>');
});




app.listen(3000);