const path = require('path');
const express = require('express');//exporta uma função
const bodyParser = require('body-parser'); //parser de requests
const app = express(); //função exportada, pode-se dizer que iniciou um "objecto"
//importa de /controllers/error.js
const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//theme engine .ejs setup
app.set('view engine','ejs');
app.set('views','views');





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
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//pagina 404 not found
//import de errorController/error.js
app.use(errorController.get404);




app.listen(3000);