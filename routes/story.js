const router = require("express").Router()
const Post = require("../models/blogModel")
const asyncHandler = require("express-async-handler")

router.get("/story/:id",asyncHandler(async (req,res,next)=>{
    var story = await Post.findById(req.params.id).exec()
    var related = await Post.findById({},"title tag date image").exec()
    res.render("story",{title : "Blog-Story", story, markdown})
}) )

module.exports = router