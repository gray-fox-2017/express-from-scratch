const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes');
const user = require('./routes/user');
let app = express();

app.set('view engine','ejs');
app.set('views','./views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./public'));


app.use('/',index);
app.use('/user',user);

app.listen(3000,()=>{console.log('server is listening at port 3000')});