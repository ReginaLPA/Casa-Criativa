const express = require('express');
const server = express();

//configurar arquivos estaticos (css,script,imagens)
server.use(express.static("public"))


const nunjucks = require("nunjucks")
    nunjucks.configure("views", {
    express: server,
    noCache: true
})

//server.set('view engine', 'html');
//criei uma rota

/*
server.get('/', function(req, res){
    return res.sendFile(__dirname +"/index")
})

server.get('/ideias', function(req, res){
    return res.sendFile(__dirname +"/ideias")
})
*/

server.get('/index', function(req, res){
    return res.render("index.html");
})

server.get('/ideias', function(req, res){
    return res.render("ideias.html");
})



server.listen(3000);

