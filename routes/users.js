var express = require('express');
var router = express.Router();
var db = require ('../models')
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Students.findAll()
  .then((input) =>{
    res.render('users', { data : input});
  })
  .catch((err) => {
    console.log(err);
  })

});

router.post('/',function(req,res,next) {
  let name = req.body.name;
  let alamat = req.body.alamat;
  db.Students.create(req.body)
  .then((students)=>{
    res.redirect('/users');
  })
  .catch((err) => {
    console.log(err);
  })
})

router.get('/edit/:id', function(req,res,next) {
  db.Students.find({
    where : {
      id : req.params.id
    }
  })
  .then(function(students) {
    res.render('users_edit', {
      data : students
    })
  })

})

router.post('/update/:id', function(req,res,next) {
  db.Students.update({
    name : req.body.name,
    alamat : req.body.alamat
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(function() {
    res.redirect('/users')
  })
})

router.get('/delete/:id', function(req,res,next) {
  db.Students.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(function() {
    res.redirect('/users')
  })
})

router.get('/add', function(req,res,next) {
  res.render('add_user')
})

router.post('/create', function(req,res,next) {
  models.Students.create({
    name : req.body.name,
    email : req.body.alamat
  })
  .then(function(){
    res.redirect('/users')
  })
})

module.exports = router;
