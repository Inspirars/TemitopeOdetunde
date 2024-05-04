const router = require("express").Router()
const Post = require("../models/blogModel")
const asyncHandler = require("express-async-handler")
var TurndownService = require('turndown')

router.get("/story/:id",asyncHandler(async (req,res,next)=>{
    var story = await Post.findById(req.params.id).exec()
    var turndownService = new TurndownService()
    var markdown = turndownService.turndown('<h1>Hello world!</h1>')
    console.log(markdown)
    res.render("story",{title : "Blog-Story", story, markdown})
}) )

module.exports = router