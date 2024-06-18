const express = require("express")
const router = express.Router()
const Post = require("../models/blogModel")

router.get("/api/blog", async (req,res,next)=>{
    var blog = await Post.find({},"title tag date image")
    res.send(blog)
})

module.exports = router