'use strict'
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
// import from routes folder
const index = require('./routes');
const user = require('./routes/user')



// set ejs
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('./public'))

app.use('/', index);
app.use('/user', user);



app.listen(3000, ()=> {
  console.log('server is listening at port 3000');
})
