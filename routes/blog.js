const express = require("express")
const router = express.Router()
const Post = require("../models/blogModel")

router.get("/", async (req,res,next)=>{
    var blog = await Post.find({},"title tag date image")
    res.render('blog',{title : "Blog", blog})
})

module.exports = router