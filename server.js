import express from "express";

const posts = [
    {
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150" //Imagem aleatoria somente para teste
    },
    {
      descricao: "Gato brincando com um novelo de lã",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gatinho dormindo em uma caixa de papelão",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gata olhando pela janela",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Grupo de gatinhos brincando",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gato com um chapéu engraçado",
      imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json()); //Serve para transitar textos en diversas linguagens

//iniciar o servidor - 3000 = Porta padrão de acesso de servidor local
app.listen(3000, () => {
    console.log("Servidor Escutando...");

});

//Demonstrar a rota/caminho definindo a resposta ↓
//Criando rota para cliente ↓
// req res = requisição e resposta ↓

app.get("/posts", (req,res) =>{
    res.status(200).json(posts); //acessar navegador = localhost:3000/posts
});

//video 18 mim
