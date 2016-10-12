var express = require('express');
var router = express.Router();

/*GET contact me page*/
router.get('/', function(req, res, next) {
  res.render('contact-thanks', { title: 'Thank You!',
                          page: 'contact-thanks'});
});

module.exports = router;
