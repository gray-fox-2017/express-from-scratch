const routes = require('express').Router();

routes.get('/',(req,res)=>{
  res.send('IloveHacktiv8')
})

module.exports = routes;