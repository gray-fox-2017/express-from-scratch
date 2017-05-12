const express = require('express');
const db = require('../models');

let router = express.Router();


router.get('/', (request, response) => {
  db.User.findAll()
  .then((Users)=>{
    response.render('index', {data : Users});
  })
  .catch((err) => {
    console.log("err");
  })
})

router.post('/', (request,response) =>{
  let name = request.body.Username
  let email = request.body.Email
  db.User.create({
    'username' : name,
    'email' : email
  })
  .then(()=>{
    response.redirect("/user");
  })
  .catch(err => {
    console.log("err");
  })
})
//Get Form Update
router.get('/edit/:id', (request,response) =>{
  let id = request.params.id || 0;
  db.User.findById(id)
  .then(User => {
    response.render('edit', {data : User});
  })
  .catch(err => {
    console.log(err);
  })
});

//Update
router.post('/edit/:id', (request,response) => {
  let id = request.params.id || 0
  let username = request.body.Username;
  let email = request.body.Email;
  db.User.update({
    'username' : username,
    'email' : email
  }, {
    where : {'id' : id}
  })
  .then(() => {
    response.redirect('/user');
  })
  .catch((err) =>{
    console.log(err);
  })

});
//Delete
router.get('/delete/:id', (request,response) =>{
  let id = request.params.id;
  db.User.destroy({
    where : {'id' : id}
  })
  .then(() =>{
    response.redirect('/user');
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
