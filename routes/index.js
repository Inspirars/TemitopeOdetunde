var express = require('express');
var router = express.Router();
var constants = require("../public/javascripts/js/constants");

/* GET home page. */
router.get('/', function(req, res, next) {
  const blog = constants.blog
  const merch = constants.merch
  res.render('index', { title: 'Welcome', constants : constants.market, comments : constants.comments, bookCovers: constants.bookCover, blog, merch });
});

module.exports = router;
