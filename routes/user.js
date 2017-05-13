const users = require('express').Router();
let models = require('../models');

users.get('/', (req, res, next)=> {
  models.User.findAll({})
  .then((users)=> {
    res.render('users/index', { //ingat yang di simpan adslah users ke index.ejs
      users: users
    })
  })
})

users.post('/create', (req, res, next)=> {
  models.User.create({
    fisrt_name: req.body.fisrt_name,
    last_name: req.body.last_name,
    hobi: req.body.hobi,
    username: req.body.username,
    email: req.body.email
  })
  .then((user)=> {
    res.redirect('/user')
  })
})

users.get('/add', (req, res, next)=> {
  res.render('users/add')
})

users.get('/edit/:id', (req, res, next)=> {
  models.User.find({
    where: {
      id: req.params.id
    }
  })
  .then((users)=> {
    res.render('users/edit', {
      users: users
    })
  })
})

users.post('/update/:id', (req, res, next)=> {
  models.User.find({
    where: {
      id: req.params.id
    }
  })
  .then((users)=> {
    if (users) {
      users.updateAttributes({
        fisrt_name: req.body.fisrt_name,
        last_name: req.body.last_name,
        hoby: req.body.hoby,
        username: req.body.username,
        email: req.body.email
      })
      .then((todo)=> {
        res.redirect('/users')
      })
    }
  })
})

users.get('/delete/:id', (res, req, next)=> {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((users)=> {
    res.redirect('/users')
  })
})

module.exports = users;
