const express = require('express');
const db = require('../models');

let router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/user');
})

module.exports = router;
