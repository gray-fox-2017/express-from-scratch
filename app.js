
const express = require('express')
const index = require('./routes/')
const user = require('./routes/user')
const bodyParser = require('body-parser')


let app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/user', user)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(3000, () => {
  console.log('listen on port 3000');
})
