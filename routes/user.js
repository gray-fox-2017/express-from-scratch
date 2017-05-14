const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

routes.get('/',function(req,res,next) {
  res.render('user')
})

routes.post('/user',function(request,response,next) {
  console.log(request.body.firstname_form);
  response.json(request.body.firstname_form)
})

routes.get('/edit/:id',function(request,response,next) {
  response.render('user',{"id" : request.params.id })
})
module.exports = routes;
