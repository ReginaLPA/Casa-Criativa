const express = require('express');
const server = express();


const ideas = [
{
    img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
   title:"Cursos de programação",
   category: "Estudo",
   description:"As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
   url:"https://rocketseat.com.br/" 
},
{
    img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
   title:"Exercícios Físico",
   category: "Saúde Física",
   description:"A caminhada permite ao iniciante começar o seu programa de exercícios com cargas bem leves de trabalho e, com o tempo, ir progredindo lentamente, até atingir a intensidade ideal de treinamento.",
   url:"https://belezaesaude.com/exercicios-fisicos/" 
},
{
    img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
   title:"Meditação",
   category: "Saúde Mental",
   description:"A meditação é uma técnica que permite conduzir a mente para um estado de calma e relaxamento, através de métodos que envolvem postura e focalização da atenção para atingir tranquilidade e paz interior.",
   url:"https://www.tuasaude.com/como-meditar/" 
},
{
    img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
   title:"Karaoke",
   category: "Diversão em Família",
   description:"Karaoke online e gratuito: cante sem sair de casa",
   url:"https://catracalivre.com.br/criatividade/karaoke-online-e-gratuito-cante-sem-sair-de-casa/" 
},

]
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
    const reverseIdeas =[...ideas].reverse()
    
    let lastIdeas = []
    for(let idea of reverseIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }
    

    return res.render("index.html", { ideas: lastIdeas })
})

server.get('/ideias', function(req, res){
    const reverseIdeas =[...ideas].reverse()

    return res.render("ideias.html", {idea: reverseIdeas});
})



server.listen(3000);

