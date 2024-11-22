import express from "express";

const app = express();

//iniciar o servidor - 3000 = Porta padrão de acesso de servidor local
app.listen(3000, () => {
    console.log("Servidor Escutando...");

});

//Demonstrar a rota/caminho definindo a resposta
//Criando rota para cliente
// req res = requisição e resposta

app.get("/api", (req,res) =>{
    res.status(200).send("Rota Inicial"); //acessar navegador = localhost:3000/api
});


