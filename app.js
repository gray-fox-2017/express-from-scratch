const express = require('express');
const app = express();
const index = require('./routes/index');
const user = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/',index);

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
