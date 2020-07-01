var mongoose = require('mongoose');
var encodedMessageSchema = require('./schemas/encoded-message-schema.js');

module.exports = {
  EncodedMessage: mongoose.model('EncodedMessage', encodedMessageSchema)
}
