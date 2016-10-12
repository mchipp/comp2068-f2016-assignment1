/*
* File: projets.js
* Author: Mark Chipp
* Web site: Portfolio
* Description: Router for the Projects page
*/

var express = require('express');
var router = express.Router();

/*GET projects page*/
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

module.exports = router;
