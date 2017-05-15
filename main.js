const express = require('express');
const app = express()
const bodyParser = require('body-parser');
let user = []
module.exports = user
const routes = require('./routes/index')
const routes2 = require('./routes/myRoutes')


app.set('view engine','ejs');
app.set('views','./views')

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',routes);
app.use('/user',routes2);


app.listen(3000)

