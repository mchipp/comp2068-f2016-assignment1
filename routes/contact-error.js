var express = require('express');
var router = express.Router();

/*GET contact me page*/
router.get('/', function(req, res, next) {
  res.render('contact-error', { title: 'Oops!',
                          page: 'contact-error'});
});

module.exports = router;
