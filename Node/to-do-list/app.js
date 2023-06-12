const express = require('express');

//Todos os métodos do servidor disponível em app 
const app = express(); 

//Metodo GET, rota: "/", resp: "res"
app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas</h1>')
})

app.get

//Inicia, "ouvindo" a porta 3000
app.listen(3000,()=>{
    console.log('Server ON')
})