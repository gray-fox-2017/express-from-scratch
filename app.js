const express = require('express');
const user = require('./routes/user')

let app = express()

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use('/user', user);

app.get('/', function (request, response, next) {
  response.render("home")
})

app.listen(3000);
console.log(`you are now listening to 3000 Local Host!!`)