var express = require('express');
var router = express.Router();


router.post('/encode', function(req, res, next) {
  res.send('route sent');
});

module.exports = router;
