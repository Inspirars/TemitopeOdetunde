var express = require('express');
var router = express.Router();
var constants = require("../public/javascripts/js/constants");
const Post = require("../models/blogModel")

/* GET home page. */
router.get('/api/home', async function(req, res, next) {
  const blog = await Post.find({},"title tag date image").sort({date : 1}).limit(3)
  res.send(blog);
});

module.exports = router;
