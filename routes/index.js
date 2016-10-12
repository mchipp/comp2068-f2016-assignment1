/*
* File: index.js
* Author: Mark Chipp
* Web site: Portfolio
* Description: Router for the min Index page
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

module.exports = router;
