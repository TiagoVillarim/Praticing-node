const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./Routes/index');
const users = require('./Routes/users');
const config = require('./config/config');



const url = config.bd_string;


mongoose.connect(url);

mongoose.connection.on('error', (err) => {
  console.log('erro na conexão com o banco de dados' + err)
});

mongoose.connection.on('disconnected', () => {
  console.log('desconectado do banco de dados')
});

mongoose.connection.on('connected', () => {
  console.log('Aplicação conectada com o banco de dados')
});

//body parser
app.use(express.json());

app.use('/', routes);
app.use('/users', users);

app.get('/', (req, res) => {
  let obj = req.query
  return (
    res.send({message: `${obj.nome} , ${obj.idade}`})
  )
});

app.post('/', (req, res) => {
  return(
    res.send({message: 'tudo ok com o metodo post'})
  )
});

app.listen(3000);

module.exports = app;

