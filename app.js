"use strict"

const express = require('express')
const index = require('./routes/index')
const user = require('./routes/user')
const path = require('path')
const bodyParser = require('body-parser')


let app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))


//default url
app.use('/', index)
app.use('/user', user)




app.listen(3000)

module.exports = app