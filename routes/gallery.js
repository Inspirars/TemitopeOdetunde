const router = require('express').Router()


router.get('/gallery',(req,res,next)=>{
    res.render('gallery',{title : 'Gallery'})
})

module.exports = router