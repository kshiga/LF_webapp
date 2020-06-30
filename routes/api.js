var express = require('express');
var router = express.Router();

router.post('/encode', function(req, res, next) {
  var canEncode = true;
  if(canEncode){
    res.status(200).send({EncodedMessage: 'this is a Message'});
  } else {
    res.status(500).send({EncodedMessage: ''});
  }
});

module.exports = router;
