const express = require("express"); 
const app = express(); 

app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao ESTOQUE!</h1>");
})

 
app.get("/estoque", function(req,res){
    res.send("<h1>Lista de estoque!</h1> <h2> <br> Arroz branco : 10 unid </h2> <h2> <br> Banana: 30 unid</h2> <h2> <br> ovos: 60 unid </h2>");
     

})


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
    
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " retirado!</h1>");
    }else{
        res.send("<H1> produto retirado do sistema! </H1>");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 4000
    if (erro){
        console.log("<h1> Erro ao Iniciar</h1>.");
    }else{
        console.log(" <h1> Servidor Iniciado. </h1>");
    }
})
