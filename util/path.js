const path = require('path');


//process -> global variable
//mainModule -> property que se refere ao main module que começou a aplicação
//ou seja ao module que criamos na app.js
//filename <- que é chamado para saber em que ficheiro o modulo foi corrido

//Resumo: process.mainModule.filename
//dá-nos o caminho para o ficheiro que é responsavel pelo facto
//da nossa aplicação está correr e é o que metemos no dirname
//para obter o caminho para essa directoria
module.exports = path.dirname(process.mainModule.filename);