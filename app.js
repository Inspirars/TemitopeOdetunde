var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var bookRouter = require('./routes/books')
var aimRouter = require('./routes/aim')
const aboutRouter = require("./routes/about")
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog')
const storyRouter = require("./routes/story")
const galleryRouter = require('./routes/gallery')


var app = express();

let mongoString = process.env.MONGOSTRING

main()
.then( ()=> console.log("connected to db"))
.catch( err => console.log(err))


async function main(){
  await mongoose.connect(mongoString)
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/books", bookRouter)
app.use("/about",aboutRouter)
app.use("/aim", aimRouter)
app.use("/blog", blogRouter)
app.use("/",storyRouter)
app.use("/",galleryRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
