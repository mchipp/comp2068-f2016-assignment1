/*
* File: app.js
* Author: Mark Chipp
* Web site: Portfolio
* Description: Main application file, drvier for my portfolio web site application
*/

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// must include/require various NPMs that were downloaded 
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

//setup routes to each of the page sections
var routes = require('./routes/index');
var about = require('./routes/about');
var projects = require('./routes/projects');
var services = require('./routes/services');
var contact = require('./routes/contact');
var contact_thanks = require('./routes/contact-thanks');
var contact_error = require('./routes/contact-error');

var app = express();

// make us of body-parser functions to extract fields from mail form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Nodemailer code learned from the Nodemailer site!
app.post('/contact', function (req, res) {
  var smtpTrans = nodemailer.createTransport('smtps://chipp.mark@gmail.com:Omicron158@smtp.gmail.com');

  //Mail options
  var mailOpts = {
    replyTo: req.body.email,
    to: 'chipp.mark@gmail.com', // list of receivers
    subject: 'Contact form', // Subject line
    text: req.body.message + " from " + req.body.name + " at " + req.body.email // plaintext body
  };

  //Transmits mail
  smtpTrans.sendMail(mailOpts, function(error, response){
    if(error){
      console.log(error);
      res.redirect('/contact-error'); // If there is an error, redirects user to an error page
    }
    else{
      console.log("Message sent: " + response.message);
      res.redirect('/contact-thanks'); // If everything works, redirects user to a thank you page
    }
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
app.use('/contact-thanks', contact_thanks);
app.use('/contact-error', contact_error);

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
