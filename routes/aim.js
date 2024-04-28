const express = require("express")
const router = express.Router()
const constant = require("../public/javascripts/js/constants")

router.get("/",(req,res,next)=>{
    res.render('aim',{title : "Ambassador"})
})

module.exports = router