const express = require('express');
const routes = express.Router();

routes.get('/',function(request,response,next) {
  response.render('index')
})



module.exports = routes;
