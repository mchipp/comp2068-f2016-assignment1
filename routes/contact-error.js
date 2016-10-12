/*
* File: contact-error.js
* Author: Mark Chipp
* Web site: Portfolio
* Description: Router for the Contact Me Error page
*/

var express = require('express');
var router = express.Router();

/*GET contact me page*/
router.get('/', function(req, res, next) {
  res.render('contact-error', { title: 'Oops!',
                          page: 'contact-error'});
});

module.exports = router;
