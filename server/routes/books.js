const express = require("express")
const router = express.Router()
const constant = require("../public/javascripts/js/constants")

router.get("/", (req,res,next)=>{
    const books = constant.books
    res.render("book", {title : "Temitope Books", books})
})

module.exports = router