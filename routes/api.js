var express = require('express');
var router = express.Router();
var {EncodedMessage} = require('../models/encoded-message.js');

router.post('/encode', async function(req, res, next) {
  var encodedMessage = new EncodedMessage({ shift: req.body.shift, message: req.body.message });
  encodedMessage.encode();
  await encodedMessage.save().then((value) => {
    if(value.encodedMessage.length){
      res.status(200).send({EncodedMessage: value.encodedMessage});
    } else {
      res.status(500).send({EncodedMessage: ''});
    }
  });
});

module.exports = router;
