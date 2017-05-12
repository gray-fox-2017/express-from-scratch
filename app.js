const express = require('express');
const bodyParser = require('body-parser');

let app = express();

const user = require('./routes/user');

//param1 = adalah views dari express, dan param2 = adalah pengarahan untuk folder
app.set('views','views')
//parah 1 = adalah call views nya express, dan param2 = adalah isi dari pacakge nya
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.use('/user',user);

app.listen(3000, ()=>{
  console.log("Server Listen port 3000");
})
