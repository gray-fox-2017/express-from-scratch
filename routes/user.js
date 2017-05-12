const express = require('express');
const routes = express.Router();

routes.get('/',function(request,response,next) {
  response.send("Testing on user")
})

routes.post('/',function(request,response,next) {
  response.send("Send from post method")
})

routes.get('/edit/:id',function(request,response,next) {
  response.render('user',{"id" : request.params.id })
})
module.exports = routes;
