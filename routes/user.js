'use strict'
const express = require('express');
const db = require('../models');
let router = express.Router();

router.get('/insert',(req,res) => {
  res.render('insert',{error:''});
});

router.post('/insert',(req,res)=>{
  db.User.insertNew(req.body,
    ()=> {res.redirect('/');},
    (err)=>{res.render('insert',{error:err})}
  );
});

router.get('/edit/:id',(req,res,next)=>{
  let id = req.params.id || '';
  db.User.getDataById(id,(users)=>{
    res.render('edit',{users});
  });
});

router.post('/edit/:id',(req,res,next)=>{
  let id = req.body.txtID || '';
  let name = req.body.txtName || '';
  let email = req.body.txtEmail || '';
  let user = {
    id:id,
    name:name,
    email:email
  }
  // res.send(user);
  db.User.updateData(user,
    ()=>{res.redirect('../../')}
    // ,(err)=>{res.render(`edit/${id}`)}
  )
});


router.get('/delete/:id',(req,res,next)=>{
  let id = req.params.id || '';
  db.User.deleteData(id,()=>{res.redirect('../../')})
});
module.exports = router;