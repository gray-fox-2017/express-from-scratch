const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
  let data = {
    id: 1,
    firstname: 'stedy',
    lastname: 'yulius',  
  }
  res.render("user",{datas: data});
});

router.post('/',function(req,res,next){
  res.send('user')
})

router.get('/edit/:id', function(req,res,next){
  res.render(req.params.id)
})

router.get('/edit/:id',function(req,res,next){
  res.send()
})

module.exports = router;
