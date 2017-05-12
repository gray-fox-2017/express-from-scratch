
const express = require('express')
const db = require('../models')
let router = express.Router()


router.get('/', (req, res, next) => {
  db.findAll()
  .then((users) => {
    res.render('index', {'data' : users})
  })
  .catch((err) => console.log(err))

})

router.get('/edit/:id', (req, res, next) => {
  res.send(`id user ${req.params.id}`)
})

router.get('/user/delete/:id', (req, res, next) => {
  res.send(`Delete user dengan id ${req.params.id}`)
})

router.post('/', (req, res, next) => {
  res.redirect('POST request to homepage')
})

module.exports = router
