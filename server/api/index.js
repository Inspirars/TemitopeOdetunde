var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('../routes/index');
var blogRouter = require('../routes/blog')
const storyRouter = require("../routes/story")
const galleryRouter = require('../routes/gallery')
const contactRouter = require('../routes/contactform')


var app = express();
app.use(cors())

let mongoString = process.env.MONGOSTRING

main()
.then( ()=> console.log("connected to db"))
.catch( err => console.log(err))


async function main(){
  await mongoose.connect(mongoString)
}


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','public')));

app.use('/', indexRouter);
app.use("/", blogRouter)
app.use("/", storyRouter)
app.use("/", galleryRouter)
app.use("/", contactRouter)

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
