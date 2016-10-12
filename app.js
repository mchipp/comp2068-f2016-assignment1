var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var bodyparser = require('body-parser');

var routes = require('./routes/index');
var about = require('./routes/about');
var projects = require('./routes/projects');
var services = require('./routes/services');
var contact = require('./routes/contact');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', function (req, res, next) {
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.

smtpTrans = nodemailer.createTransport('smtps://chipp.mark@gmail.com:Omicron158@smtp.gmail.com');

  //Mail options
  mailOpts = {
      //from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
      //from: ''"Fred Foo"'', //grab form data from the request body object
      to: 'chipp.mark@gmail.com',
      subject: 'Website contact form',
      text: req.body.name + ' ' + req.body.email + ' ' + req.body.message
  };

  smtpTrans.sendMail(mailOpts, function(error, response){
    if(error) {
      console.log(error)}
    else {
      console.log('Message sent: ')}
});
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', routes);
app.use('/about', about);
app.use('/projects', projects);
app.use('/services', services);
app.use('/contact', contact);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
