const express = require("express")
const router = express.Router()
const { sendConfirmationMail } = require('../utils/mailer')

router.post('/api/v1/contact', async (req,res,next)=>{
    const {fullName, phoneNumber, email, service, need} = req.body

    if(!fullName || !phoneNumber || !email || !service || !need){
        if(!fullName){
            res.json({success : false, message : "fullName field missing"})
        }else if(!phoneNumber){
            res.json({success : false, message : "phoneNumber field missing"})
        }else if(!email){
            res.json({success : false, message : "email field missing"})
        }else if(!service){
            res.json({success : false, message : "service field missing"})
        }else if(!need){
            res.json({success : false, message : "need field missing"})
        }
    }else{
        sendConfirmationMail(res,fullName, phoneNumber, email, service, need )
    }


})

module.exports = router