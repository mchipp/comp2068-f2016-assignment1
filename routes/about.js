/*
* File: about.js
* Author: Mark Chipp
* Web site: Portfolio
* Description: Router for the About Me page
*/

var express = require('express');
var router = express.Router();

/*GET about me page*/
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

module.exports = router;
