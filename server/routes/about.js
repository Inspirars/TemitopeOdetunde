const constants = require("constants")
const express = require("express")
const router =  express.Router()

router.get("/",(req,res,next)=>{
    res.render("about", {title : "About Me"})
})

module.exports = router