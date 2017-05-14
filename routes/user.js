const express = require('express');
const db = require('../models');

let router = express.Router();

router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
  db.User.findById(id)
    .then(user => {
      res.render('edit', {
        data: user
      })
    })
})

router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id
  let username = req.body.username
  let email = req.body.email
  db.User.findById(id)
    .then(user => {
      user.update({
          'username': username,
          'email': email
        },{ where: {
          'id': id
        }})
        .then(user => {
          res.redirect('/user')
        })
    })
})

router.get('/', (req, res, next) => {
  db.User.findAll()
    .then((users) => {
      res.render('view', {
        data: users
      });
    })
})


router.post('/', (req, res, next) => {
  let username = req.body.username
  let email = req.body.email
  db.User.create({
      'username': username,
      'email': email
    })
    .then((user) => {
      console.log(user);
      res.redirect('/user')
    })
})


router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id
  db.User.destroy({
      where: {
        'id': id
      }
    })
    .then(() => {
      res.redirect('/user')
    })
})

module.exports = router;