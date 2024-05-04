var express = require('express');
var router = express.Router();
var constants = require("../public/javascripts/js/constants");
const Post = require("../models/blogModel")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const blog = await Post.find({},"title tag date image")
  const merch = constants.merch
  res.render('index', { title: 'Welcome', constants : constants.market, comments : constants.comments, bookCovers: constants.bookCover, blog, merch });
});

module.exports = router;
