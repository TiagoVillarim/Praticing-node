const express = require('express');
const route = express.Router();
const users = require('../model/user');

route.get('/', (req, res) => {
  users.find({}, (err, data) => {
    if(err){
      return (
        res.send({error: 'erro na consulta do DB'})
      );
    }else{
      return (
        res.send(data)
      );
    }
  });
});

route.post('/create', (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    return(
      res.send({error: 'Error, dados insuficientes!'})
    )
  };
  users.findOne({email}, (err, data) => {
    if(err){
      return res.send({error: 'error ao buscar usuario'});
    };
    if(data){
      return res.send({error: 'error, usuario já cadastrado'})
    };
    
    users.create(req.body,(err, data) => {
      if(err){
        return res.send({error: 'erro ao criar usuario'});
      }else{
        data.password = undefined;
        return res.send(data)
      };
    });
  });
});

module.exports = route;