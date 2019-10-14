const express  = require('express');

const server = express();

server.use(express.json());

const users = ['Hélder','Pedro','Bruno'];

// Listagem de todos os usuarios
server.get('/users', (req, res) => {
    return res.send(users);
})

// Listagem de um usuario especifico
server.get('/users/:index', (req, res) => {
    const { index } = req.params;
    return res.json({ message: users[index] });
});

// Criação de um usuario
server.post('/users', (req, res) => {
    const { name } = req.body;
    users.push(name);

    return res.json(users);
})

// Alteração de um usuario especifico
server.put('/users/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
})

server.delete('/users/:index', (req,res) => {
    const { index } = req.params;
    
    users.splice(index,1);
    
    return res.send();
})

server.listen(3000);
