'use strict'
const express = require('express');
const db = require('../models');
let router = express.Router();

router.get('/',(req,res,next)=>{
  db.User.getAllData((users) => {res.render('viewAll',{users})} );
});

// router.post('/insert',(req,res,next)=>{
//   let txtName = req.body.txtName || '';
//   let id = (users.length > 0 ?  parseInt(users[users.length-1].id)+1 : 1)
//   if (txtName !== '') {
//     users.push({id:id,name:txtName});
//     res.redirect('/');
//   } else {
//     res.send('Username harus diisi');
//   }
//
// });

module.exports = router;




