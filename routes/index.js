var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.json({
    name: 'Hamster',
    hobby: 'Eat a lot'
  })

});

router.post('/', function(req, res, next) {
  console.log('YOU HIT ME')
  res.json({
    name: req.body.name,
    email: req.body.email
  })

});


module.exports = router;
