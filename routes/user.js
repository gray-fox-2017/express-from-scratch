'use strict'

const express = require('express')
const db = require('../models')
const routes = express.Router();

routes.get('/', (req, res, next)=>{
  db.User.findAll({})
  .then((users)=>{
    res.render('/users/index', { data : users})
  })
  .catch((err)=>{
    console.log(err);
  })
});

routes.post('/', (req, res, next)=>{
  let name = req.body.name;
  let hobby = req.body.hobby;
  let username = req.body.username;
  let email = req.body.email;
  db.User.create(req.body)
  .then((user)=>{
    res.redirect('/user')
  })
  .catch((err)=>{
    console.log(err);
  })
})

// routes.get('/edit/:id', (req, res, next)=>{
//   db.User.find({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then((users)=>{
//     res.redirect('user/edit', {
//       users : users
//     })
//   })
// })

routes.get('/delete', (req, res, next)=>{

})



module.exports = routes;
