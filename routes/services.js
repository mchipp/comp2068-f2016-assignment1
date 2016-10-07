var express = require('express');
var router = express.Router();

/*GET serices page*/
router.get('/', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

module.exports = router;
