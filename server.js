import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150" // Imagem aleatória somente para teste
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gatinho dormindo em uma caixa de papelão",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gata olhando pela janela",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Grupo de gatinhos brincando",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
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

function buscarPostsId(id){
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req,res) => {
  const index = buscarPostsId(req.params.id);
  res.status(200).json(posts[index]); //acessar navegador = localhost:3000/posts
});


