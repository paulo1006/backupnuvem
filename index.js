const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao ESTOQUE!</h1>");
})

//rota do cadastro de produtos
app.get("/estoque", function(req,res){
    res.send("<h1>Lista de estoque!</h1> <h2> <br> Arroz branco : 10 unid </h2> <h2> <br> Banana: 30 unid</h2> <h2> <br> ovos: 60 unid </h2>");
     

})

//rota com parametro opcional
app.get("/cadastrar/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " cadastrado!</h1>");
    }else{
        res.send("<h1>O produto cadastrado no sistema!</h1>");
    }
     
})

app.get("/retirar/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " retirado!</h1>");
    }else{
        res.send("<H1> produto retirado do sistema! </H1>");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
