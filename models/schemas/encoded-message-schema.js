var mongoose = require('mongoose');
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var encodedMessageSchema = new mongoose.Schema({
  shift: { type: Number, required: true },
  message: { type: String, required: true },
  encodedMessage: String
});

encodedMessageSchema.methods.encodedCharacter = function(char){
  if(/[a-zA-Z]/.test(char)){
    var isUpperCase = /[A-Z]/.test(char);
    char = char.toLowerCase();

    var alphabetIndex = alphabet.indexOf(char);
    alphabetIndex = alphabetIndex + this.shift;

    if(alphabetIndex > 25){
      alphabetIndex = alphabetIndex - 26;
    }

    return isUpperCase ? alphabet[alphabetIndex].toUpperCase() : alphabet[alphabetIndex];
  } else if(/\s/.test(char)){
    return ' ';
  } else {
    return '';
  }
}

encodedMessageSchema.methods.canEncode = function(){
  var hasShift = this.shift > 0;
  var hasMessage = this.message.length > 0;
  var latinCharactersOrSpaceOnly = /^[a-zA-z\s]*$/.test(this.message);

  return hasShift && hasMessage && latinCharactersOrSpaceOnly;
}

encodedMessageSchema.methods.encode = function() {
  if(this.canEncode()){
    var chars = this.message.split('');
    var encode = chars.map(function(char){
      return this.encodedCharacter(char);
    }.bind(this));
    this.encodedMessage = encode.join('');
  } else {
    this.encodedMessage = '';
  }

  return this.encodedMessage;
}



module.exports = encodedMessageSchema;
