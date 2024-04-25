var express = require('express');
var router = express.Router();
var constants = require("../js/constants");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', constants : constants.market });
});

module.exports = router;
