var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  let data = [{
    id: 1,
    firstname: 'stedy',
    lastname: 'yulius',  
  }]
  res.render("index",{datas: data});
});

router.post('/',function(req,res,next){
  res.send('index')
})

router.get('/edit/:id', function(req,res,next){
  res.render('index')
})


module.exports = router;
