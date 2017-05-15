const routes = require('express').Router();
let user = require('../main.js')
console.log(user);

routes.get('/',(req,res)=>{
  res.render('index.ejs',{message:'<b>Hacktiv8 & Javascript</b>',title:'MyApp',users:user})
})

routes.post('/',(req,res)=>{
  let id = req.body.id
  let name = req.body.name
  user.push({id:id,name:name})
  res.redirect('/user')

})

routes.get('/edit/:id',(req,res,next)=>{
  let id = req.params.id
  res.render('edit.ejs',{message:'<b>Hacktiv8 & Javascript</b>',title:'MyApp',users:user[id-1]})
})

routes.post('/edit/:id',(req,res,next)=>{
  let id = req.params.id
  let name = req.body.name
  user[id-1].name=name
  res.redirect('/user')
})

routes.get('/delete/:id',(req,res,next)=>{
  let id = req.params.id
  user.splice(id-1,1)
  res.redirect('/user')
})


module.exports = routes