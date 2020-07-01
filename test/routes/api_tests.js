var chai = require('chai');
var chaiHttp = require('chai-http');
var {app} = require('../../app');

chai.use(chaiHttp);
chai.should();

describe("API", () => {
    describe("POST encode", () => {
      describe("encoding success", () => {
        it("returns with a status code of 200", (done) => {
             chai.request(app)
                 .post('/api/encode')
                 .send({ 'shift': 12, 'message': 'hello my name is not kaitlyn' })
                 .end((err, res) => {
                     res.should.have.status(200);
                     done();
                  });
         });

         it("returns the encoded message", (done) => {
              chai.request(app)
                  .post('/api/encode')
                  .send({ 'shift': 12, 'message': 'hello my name is not kaitlyn' })
                  .end((err, res) => {
                      res.body.should.be.a('object');
                      res.body.should.have.property('EncodedMessage');
                      res.body.EncodedMessage.should.equal('tqxxa yk zmyq ue zaf wmufxkz');
                      done();
                   });
          });
      });
      describe("encoding error", () => {
        it("returns with a status code of 500", (done) => {
             chai.request(app)
                 .post('/api/encode')
                 .send({ 'shift': 12, 'message': 'hello my name is not kaitlyn!' })
                 .end((err, res) => {
                     res.should.have.status(500);
                     done();
                  });
         });

         it("returns an empty string", (done) => {
              chai.request(app)
                  .post('/api/encode')
                  .send({ 'shift': 12, 'message': 'hello my name is not kaitlyn!' })
                  .end((err, res) => {
                    res.body.should.be.a('object');
                    res.body.should.have.property('EncodedMessage');
                    res.body.EncodedMessage.should.equal('');
                      done();
                   });
          });
      });

    });
});
