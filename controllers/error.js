exports.get404 = (req,res,next)=>{

    //render('404') vê logo no file 404.pug
    //render('404') vê logo no file 404.ejs e envia o objeto key 'pageTitle'
    res.status(404).render('404',{pageTitle:'Page not find!'});

    //por ser um erro não esquecer de ligar o .status(404)
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));

    //HTML servido em cima diretamente para a pasta error404.html
    //res.status(404).send('<h1>Page not found</h1>');
};