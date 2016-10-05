var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mark Chipp' });
});

/*GET about me page*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

/*GET projects page*/
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/*GET serices page*/
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/*GET contact me page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});

module.exports = router;
