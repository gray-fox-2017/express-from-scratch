'use strict'
let users = [
  {
    "id" : 1,
    "name" : "user1"
  },
  {
    "id" : 2,
    "name" : "user2"
  },
  {
    "id" : 3,
    "name" : "user3"
  },
  {
    "id" : 4,
    "name" : "user4"
  },
  {
    "id" : 5,
    "name" : "user5"
  },
  {
    "id" : 6,
    "name" : "user6"
  }
];
const express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.set('view engine','ejs');
app.set('views','./views');
app.use(bodyParser());
app.get('/user',(req,res,next)=>{
  res.render('viewAll',{users});
});

app.post('/user',(req,res,next)=>{
  User.getAllData((users)=>{
    res.render('insert',{users});
  });
});

app.post('/user/insert',(req,res,next)=>{
  let txtName = req.body.txtName || '';
  if (txtName !== '') {
    User.insertNew({name:txtName});
    // users.push({id:id,name:txtName});
    res.redirect('/user');
  } else {
    res.send('Username harus diisi');
  }

});


app.get('/user/edit/:id',(req,res,next)=>{
  let id = req.params.id || '';
  // res.send('id'+id)
  let idx = users.findIndex((user) => user.id == id);
  // res.send(idx);
  if (id !== '' && idx!== -1) {
    let oldData = users[idx];
    // res.send(oldData)
    let datas = {
      id : id,
      oldData : oldData,
      fmethod : 'get'
    };
    res.render('edit',{datas})
  } else {
    res.send('Invalid ID');
  }

});

app.post('/user/edit/:id',(req,res,next)=>{
  let id = req.body.txtID || '';
  let txtName = req.body.txtName || '';
  let idx = users.findIndex((user) => user.id == id);
  if(id !== '' && idx !== -1) {
    users[idx].name = txtName;
    res.redirect('/user');
  } else {
    res.send('Invalid ID');
  }

});


app.get('/user/delete/:id',(req,res,next)=>{
  let id = req.params.id;
  let idx = users.findIndex((user) => user.id == id);
  if (id !== '' && idx!== -1) {
    users.splice(idx,1)
    res.redirect('/user');
  } else {
    res.send('Invalid ID');
  }


});

app.listen(3000,()=>{console.log('server is listening at port 3000')});