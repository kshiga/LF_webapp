var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../../app');

chai.use(chaiHttp);
chai.should();

describe("API", () => {
    describe("POST encode", () => {
      describe("encoding success", () => {
        it("post should return with the encoded message", (done) => {
             chai.request(app)
                 .post('/api/encode')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     res.body.should.have.property('EncodedMessage');
                     res.body.EncodedMessage.should.equal('this is a Message');
                     done();
                  });
         });
      });

    });
});
