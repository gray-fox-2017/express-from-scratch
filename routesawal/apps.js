'use strict'
const express = require('express');
let app = express();

app.get('/',function(req,res,next) {
  res.send('I love hacktv8');
})
app.listen(3000)
