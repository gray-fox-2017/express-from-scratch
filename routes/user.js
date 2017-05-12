const express = require('express');

let router = express.Router();

let akuns = [
  {'id': 001,
   'name': 'User1'
 }, {'id': 002,
  'name': 'User2'
}, {'id': 003,
  'name': 'User3'
}, {'id': 004,
  'name': 'User4'
}, {'id': 005,
  'name': 'User5'
  }
]


router.get('/', (req, res, next) => {
  res.render('tampil', {akuns})
})

router.post('/', (req, res, next) => {
  res.send('Got a post request')
})

router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id || 'masih belomn ada id'
  res.send(`masuk ke data id ini: ${id}`);
})

router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id || 'masih belomn ada id'
  res.send(`POST !! masuk ke data id ini: ${id}`);
})

router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id || 'masih belomn ada id'
  res.send(`menghapus id ini: ${id}`);
})

module.exports = router;