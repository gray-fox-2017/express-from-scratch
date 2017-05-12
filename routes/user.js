'use strict'
const express = require('express');
const db = require('../models');
let router = express.Router();

router.get('/',(req,res) => {
  res.render('insert',{});
});

router.post('/insert',(req,res)=>{
  db.User.insertNew(req.body,()=> {res.redirect('/');});
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
  let user = {
    id:id,
    name:name
  }
  db.User.updateData(user,()=>{res.redirect('../../')})
});


router.get('/delete/:id',(req,res,next)=>{
  let id = req.params.id || '';
  db.User.deleteData(id,()=>{res.redirect('../../')})
});
module.exports = router;