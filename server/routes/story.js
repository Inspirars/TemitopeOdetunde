const router = require("express").Router()
const Post = require("../models/blogModel")
const asyncHandler = require("express-async-handler")

router.get("/api/story/:id",asyncHandler(async (req,res,next)=>{
    var story = await Post.findById(req.params.id).exec()
    const tag = story.tag
    var related = await Post.find({tag: tag},"title tag date image").sort({date : 1}).limit(3).exec()
    var relatedFilter = related.filter(content => content.title != story.title)
    var relatedContent = relatedFilter && relatedFilter
    res.send({
        story,
        relatedContent
    })
}) )

module.exports = router