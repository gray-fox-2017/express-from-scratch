const express = require('express');
const bodyParser = require('body-parser')

const index = require('./routes');
const user = require('./routes/user');

let app = express();


//set ejs
app.set('views', './view')
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index)
app.use('/user', user)

app.listen(3000, () => {
  console.log('3000 is available');
})
