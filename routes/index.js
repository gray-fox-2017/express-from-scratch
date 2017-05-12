var express = require('express');
var router = express.Router();
const db = require('../models')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
db.User.findAll()
.then(function(data){
  res.render("index",{datas: data});
  })  
});

router.post('/add',function(req,res,next){
//  console.log(req.body);
  db.User.create({
    username : req.body.username,
    email: req.body.email
    
  })
  .then(function(){
      res.redirect('/')
  })
})

router.get('/edit/:id', function(req,res,next){
  db.User.find({
    where:{
      id: req.params.id
    }
  })
  .then(function(user){
    res.render('edit',{user: user})
  })
})

router.post('/update/:id',function(req,res,next){
  db.User.update({
    username: req.body.username,
    email: req.body.email
  },{
    where:{
      id:req.params.id
    }
  })
  .then(function(){
    res.redirect('/')
  })
})

router.get('/delete/:id', function(req,res,next){
  db.User.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(function(){
    res.redirect('/')
  })
})


module.exports = router;
