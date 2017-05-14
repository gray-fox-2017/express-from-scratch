const express = require('express');
const db = require('../models');
const routes = express.Router();

routes.get('/', (req, res, next)=>{
  res.render('index', {title : 'Express From Scretch'})
});


// routes.post('/user', (req, res, next){
//   res.send('This is POST express')
// })


module.exports = routes;
