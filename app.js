const express  = require ('express')

const index = require('./routes/index')
const user = require('./routes/user')
const bodyParser = require('body-parser')
const app =  express()


app.set('index', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use('/', index);
app.use('/user', user);


app.listen(3000, ()=>{
  console.log('Now port listening to port 3000');
});
