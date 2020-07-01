var chai = require('chai');
chai.should();

var {EncodedMessage} = require('../../models/encoded-message.js');

describe("EncodedMessageSchema", () => {
  describe("encodedCharacter", () => {
    it('returns the shifted character when the argument is a valid character', () => {
      var em = new EncodedMessage({shift: 3, message:'hello my name is not kaitlyn'});
      em.encodedCharacter('z').should.equal('c');
    });

    it('returns the shifted character in the correct casing', () => {
      var em = new EncodedMessage({shift: 3, message:'hello my name is not kaitlyn'});
      em.encodedCharacter('z').should.equal('c');
      em.encodedCharacter('Z').should.equal('C');
    });

    it('returns a space if the argument is a string with one space', () => {
      var em = new EncodedMessage({shift: 3, message:'hello my name is not kaitlyn'});
      em.encodedCharacter(' ').should.equal(' ');
    });

    it('returns an empty string if the argument is not a valid character', () => {
      var em = new EncodedMessage({shift: 3, message:'hello my name is not kaitlyn'});
      em.encodedCharacter('!').should.equal('');
    });
  });

  describe("canEncode", () => {
      it("returns true if message can be encoded and shift is a natural number", (done) => {
        var em = new EncodedMessage({shift: 3, message:'hello my name is not kaitlyn'});
        em.canEncode().should.be.true;
        done();
      });

      it("returns false if shift is not a natural number", (done) => {
        var em1 = new EncodedMessage({shift: -2, message:'hello my name is not kaitlyn'});
        var em2 = new EncodedMessage({shift: 0,  message:'hello my name is not kaitlyn'});
        em1.canEncode().should.be.false;
        em2.canEncode().should.be.false;
        done();
      });

      it("returns false if message string is empty", (done) => {
        var em = new EncodedMessage({shift: 3, message:''});
        em.canEncode().should.be.false;
        done();
      });

      it("returns false if message contains characters outside of spaces and upper and lowercase basic latin letters", (done) => {
        var em = new EncodedMessage({shift: 3, message:'hell0 my name is not kaitlyn'});
        em.canEncode().should.be.false;
        done();
      });
  });

  describe("encode", () => {
    it('returns an encoded message string when input can be encoded', () => {
      var em = new EncodedMessage({shift: 3, message:'hello my name is not kaitlyn'});
      em.encode().should.equal('khoor pb qdph lv qrw ndlwobq');
      em.encodedMessage.should.equal('khoor pb qdph lv qrw ndlwobq');
    });

    it('returns an empty string when input cannot be encoded', () => {
      var em = new EncodedMessage({shift: -2, message:'hello my name is not kaitlyn'});
      em.encode().should.equal('');
      em.encodedMessage.should.equal('');
    });
  });
});
