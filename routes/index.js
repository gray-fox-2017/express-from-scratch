const routes = require('express').Router();
const db = require('../models')

routes.get('/', function(req, res, next){
  res.render('index', {title: 'Express From Scretch'})
})
// routes.get('/user', (req, res, next)=> {
//   res.send('helo user')
// })
module.exports = routes;
