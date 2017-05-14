const express = require('express');
//const db = require('../models');

let router = express.Router();

router.get('/user/edit:id', (req, res) => {
  let id = req.params.id
  res.render('layout', {body: `get edit user ${id}`});
});

router.get('/user/delete:id', (req, res) => {
  let id = req.params.id
  res.send(`get delete user ${id}`);
});
// router.post('/user', (req, res) => {
//   res.send('post user');
// });

module.exports = router;
