const express = require("express")
const router = express.Router()
const constant = require("../public/javascripts/js/constants")

router.get("/",(req,res,next)=>{
    const visions = constant.visions
    const values = constant.values
    res.render('aim',{title : "Ambassador", visions, values})
})

module.exports = router