const express = require('express')
const index = require('./routes/index')
const users = require('./routes/user')
const bodyParser = require('body-parser')

let app = express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))//untuk method post
app.use(bodyParser.json())

app.use('/', index);
app.use('/user', users);
// app.get('/', (req, res, next)=> {
//   res.send('hello world')
// })

app.listen(3000, ()=> {
  console.log(`you are on port 3000 express`)
});
