const express = require('express');
const db = require('../models')
var router = express.Router()

// var users =[{
//   id:1,
//   name: 'James Sraun',
//   email: 'james@haha.com',
//   message: 'apa kabar?'
// },{
//   id:2,
//   name: 'Rachel Warinussy',
//   email: 'rachel@haha.com',
//   message: 'apa kabar juga?'
// },{
//   id:3,
//   name: 'Stedy Keren',
//   email: 'rachel@haha.com',
//   message: 'Gampang la!'
// },{
//   id:4,
//   name: 'Parel Semangat',
//   email: 'rachel@haha.com',
//   message: 'Semangat kaka!'
// }]


router.get('/', (req, res, next) => {

  db.User.findAll()
    .then(users => {
      res.render('user', {
        users: users
      })
    })
    .catch(err => {
      console.log(err);
    })

})

router.post('/', (req, res, next) => {
  console.log(req.body);
  db.User.create(req.body)
    .then(user => {
      console.log(user);
      res.redirect('/user')
    })
    .catch(err => {
      console.log(err);
    });
})

router.get('/edit/:id', (req, res, next) => {

  let id = req.params.id

  db.User.findAll({
      where: {
        id: id
      }
    })
    .then(users => {
      console.log(users);
      res.render('edit', {
        user: users[0]
      })
    })
    .catch(err => {
      console.log(err);
    });
})

router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id
  db.User.update(req.body, {
      where: {
        id: id
      }
    })
    .then(users => {
      console.log(users);
      res.redirect('/user')
    })
    .catch(err => {
      console.log(err);
    })

})

router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id

  db.User.destroy({
      where: {
        id: id
      }
    })
    .then(is_deleted => {
      console.log(is_deleted);
    })
    .catch(err => {
      console.log(err);
    })

  res.redirect('/user')
})


module.exports = router;
