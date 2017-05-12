const express = require('express')
let router = express.Router()

// router.get('/:id/:name' , (req, res, next) => {
//   let id = req.params.id || 0
//   let name = req.params.name || 'unknown'
//   res.json({
//     'id' : id,
//     'name' : name,
//     'company' : 'Sequelize HQ'
//   })
// })

router.get('/', (req, res, next) => {
  res.render('profile')
})


module.exports = router;
