const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
const db = require('../models')

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));

routes.get('/',function(request,response,next) {
  db.User.findAll()
  .then(function(datas) {
    response.render('index',{datas : datas})
  })
})

routes.post('/add',function(request,response,next) {
  db.User.create({
    firstname : request.body.Firstname,
    lastname : request.body.Lastname,
    phone : request.body.Phone
  })
  .then(function() {
    response.redirect('/')
  })
})

routes.get('/delete/id',function(request,response,next) {
  db.User.delete({
    where : {id : request.params.id}
  })
})



module.exports = routes;
