
const express = require('express');
const route = express.Router();
const auth = require('../middlewares/auth');

route.get('/', auth, (req, res) => {
  return res.send({message: 'tudo ok com a propriedade get na raiz'})
});

route.post('/', (req, res) => {
  return res.send({message: 'tudo ok com a propriedade post'})
});

module.exports = route;