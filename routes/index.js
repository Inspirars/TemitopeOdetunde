var express = require('express');
var router = express.Router();
var constants = require("../public/javascripts/js/constants");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', constants : constants.market, comments : constants.comments, bookCovers: constants.bookCover, blog : constants.blog });
});

module.exports = router;
