/*
* File: contact.js
* Author: Mark Chipp
* Web site: Portfolio
* Description: Router for the Contact Me page
*/

var express = require('express');
var router = express.Router();

/*GET contact me page*/
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Me',
                          page: 'contact'});
});

module.exports = router;
