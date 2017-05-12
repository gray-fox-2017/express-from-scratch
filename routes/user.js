const express = require('express');
const db = require('../models');

let router = express.Router();

// get all data
router.get('/', function(req, res, next) {
  db.User.findAll()
  .then((users) => {
    res.render('index', {data: users});
  })
  .catch((err) => {
    console.log(err);
  })
})

// post
router.post('/edit/:id', function(req, res, next){
  let id = req.params.id || 0
  let username = req.body.username;
  let email = req.body.email;
  db.User.update({
    'username': username,
    'email': email
  }, {
    where: {'id': id}
  })
  .then(() => {
    res.redirect('/user');
  })
  .catch((err) => {
    console.log(err);
  });
})

// get
router.get('/delete/:id', function(req, res, next){
  let id = req.params.id || 0
  db.User.destroy({
    where: {'id': id}
  })
  .then(() => {
    res.redirect('/user');
  })
  .catch((err) => {
    console.log(err);
  });
})

// post
router.post('/', function(req, res, next){
  let username = req.body.username;
  let email = req.body.email;
  db.User.create({
    'username': username,
    'email': email
  })
  .then(() => {
    res.redirect('/user');
  })
  .catch((err) => {
    console.log(err);
  });
})

// edit
router.get('/edit/:id', function(req, res, next){
  let id = req.params.id || 0
  db.User.findById(id)
  .then((user) => {
    res.render('detail', {data: user})
  })
  .catch((err) => {
    console.log(err);
  })
})



module.exports = router;
