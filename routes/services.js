/*
* File: services.js
* Author: Mark Chipp
* Web site: Portfolio
* Description: Router for the Services page
*/

var express = require('express');
var router = express.Router();

/*GET serices page*/
router.get('/', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

module.exports = router;
