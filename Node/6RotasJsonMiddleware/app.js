const express = require('express');

//All server methods available
const app = express();

//Middleware
app.use(express.json());

const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

//Method GET, rota: "/", resp: "res"
app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas</h1>')
})

app.get('/json', (req, res) => {
    console.log(req.body);
    res.json({title: 'Tarefa', done: true});
})

//Lauch, "listening" the port 3000
app.listen(3000,()=>{
    console.log('Server ON')
})