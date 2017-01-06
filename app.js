var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var contact = require('./routes/contact')
var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/contact', contact);
app.get('/services', function(req, res){
	res.render('services')
});
app.get('/index', function(req, res){
	res.render('index')
});
app.get('/about', function(req, res){
	res.render('about')
});
app.get('/kiddie', function(req, res){
	res.render('kiddie')
});
app.get('/wedding', function(req, res){
	res.render('wedding')
});
app.get('/anniversary', function(req, res){
	res.render('anniversary')
});
app.get('/debut', function(req, res){
	res.render('debut')
});
app.get('/contact', function(req, res){
	res.render('contact')
});
app.get('/about', function(req, res){
	res.render('about')
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
