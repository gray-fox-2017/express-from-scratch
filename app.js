'use strict'

const express = require('express');
const index = require('./routes');
const user = require('./routes/user');
let app = express();

const bodyParser = require('body-parser');

app.set('views','./views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/user', user);

app.listen(3000);
