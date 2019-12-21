var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('graphs');
});

/* GET gauge. */
router.get('/gauge', function(req, res, next) {
    res.render('gauge');
  });

module.exports = router;