const express = require('express')
const db = require('../models')

let router =  express.Router();



router.get('/', (req, res, next) => {
  db.datas.findAll()
  .then((datas) => {
    res.render('index', {data : datas})
  })
  .catch((err) => {
    console.log(err);
  })


})

router.post('/add', (req, res, next) => {
  //let id = req.bodyParser.id
  let name = req.body.name
  let email = req.body.email
  let subject = req.body.subject
  db.datas.create(req.body)
  .then((datas) => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err);
  })
})

router.get('/edit/:id',(req,res,next)=>{
  let id = req.params.id || ''
  let name = req.params.name || ''
  let email = req.params.email || ''
  let subject = req.params.subject || ''
  db.datas.findById(id)
  .then((datas) => {
    res.render('profile', {data : datas})
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/edit/:id',(req,res,next)=>{
  let id = req.params.id
  let name = req.body.name || ''
  let email = req.body.email || ''
  let subject = req.body.subject || ''
  db.datas.update({
      name : name,
      email : email,
      subject : subject
    },
    { where :
        {
          id : id
        }
  })
  .then((datas) => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/delete/:id',(req,res,next)=>{
  let id = req.params.id || ''
  db.datas.destroy({
    where : {
      id : id
    }
  })
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router