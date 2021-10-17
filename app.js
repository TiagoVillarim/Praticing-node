const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./Routes/index');
const users = require('./Routes/users');



const url = 'mongodb+srv://Tiago_villarim:villa134679@clusterapi.rdlsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(url);
// mongoose.set('useCreateIndex', true);

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

