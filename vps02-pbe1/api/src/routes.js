const express = require('express');
const routes = express.Router();
const Clientes = require('./controllers/controller_clientes');
const Fornecedores = require('./controllers/controller_fornecedores');
const Pedidos = require('./controllers/controller_pedidos');
const Produtos = require('./controllers/controller_produtos');
const Telefone = require('./controllers/controller_telefone');


routes.get('/', (req, res) => {
    return res.json({ massage: 'API produtos composição executando'});
});

routes.post('/clientes', Clientes.create);
routes.get('/clientes', Clientes.read);
routes.put('/clientes/:id', Clientes.update);
routes.delete('/clientes/:id', Clientes.del);

routes.post('/fornecedores', Fornecedores.create);
routes.get('/fornecedores', Fornecedores.read);
routes.put('/fornecedores/:id', Fornecedores.update);
routes.delete('/fornecedores/:id', Fornecedores.del);

routes.post('/pedidos', Pedidos.create);
routes.get('/pedidos', Pedidos.read);
routes.put('/pedidos/:id', Pedidos.update);
routes.delete('/pedidos/:id', Pedidos.del);

routes.post('/produtos', Produtos.create);
routes.get('/produtos', Produtos.read);
routes.put('/produtos/:id', Produtos.update);
routes.delete('/produtos/:id', Produtos.del);

routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);
routes.put('/telefone/:id', Telefone.update);
routes.delete('/telefone/:id', Telefone.del);


module.exports = routes;