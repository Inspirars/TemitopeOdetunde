const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')
const ejs = require('ejs');
const path = require('path')
require('dotenv').config()

// Create a transporter

function sendConfirmationMail(res,fullName, phoneNumber, email, service, need){
  const transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.livemail.co.uk',
    secureConnection: false,
    tls: {
      rejectUnauthorized: false
    },
    port : 465,
    auth: {
        user: 'info@temitopeodetunde.com',
        pass: 'BAMIdele1',
      },
  }))

  const pathtofileclient = path.join(__dirname, '..', '/views/emailClient.ejs')

  const pathtofileowner = path.join(__dirname, '..', '/views/emailOwner.ejs')

  ejs.renderFile(pathtofileclient, {fullName, phoneNumber, email, service, need},(error, renderedHtml)=>{

    const mainOptions = {
    from: '"Temitope Odetunde"info@temitopeodetunde.com',
    to: 'deemajor230600@gmail.com',
    subject: 'Hi there',
    html: renderedHtml,
  };

  transporter.sendMail(mainOptions, (error, info) => {
    if (error) {
      return res.json({success : false, message : error });
    }
  });

  })


  ejs.renderFile(pathtofileowner, {fullName, phoneNumber, email, service, need},(error, renderedHtml)=>{

    const subOptions = {
      from : 'Info@temitopeodetunde.com',
      to : 'momoh.oladimeji@gmail.com',
      subject: 'New Contact',
      html : renderedHtml
    }

    transporter.sendMail(subOptions, (error, info) => {
      if (error) {
        return res.json({success : false, message : error });
      } else {
        console.log(info)
        return res.json({success : true, message : info})
      }
    });

  })



  
}


module.exports.sendConfirmationMail = sendConfirmationMail