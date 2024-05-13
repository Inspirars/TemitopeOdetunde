const router = require("express").Router()
const Post = require("../models/blogModel")
const asyncHandler = require("express-async-handler")

router.get("/story/:id",asyncHandler(async (req,res,next)=>{
    var story = await Post.findById(req.params.id).exec()
    var related = await Post.find({},"title tag date image").sort({date : 1}).limit(3).exec()
    res.render("story",{title : "Blog-Story", story, related})
}) )

module.exports = router