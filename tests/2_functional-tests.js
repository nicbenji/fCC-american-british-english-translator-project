const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  const britishToAmerican = 'british-to-american';
  const americanToBritish = 'american-to-british';

  test('should translate correctly to the correct locale', (done) => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'Test',
        locale: americanToBritish
      })
      .end((_err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.deepEqual(res.body, {
          text: 'Test',
          translation: ''
        });
        done();
      });
  });


  test('should return an error on wrong locale', (done) => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'I love exotic languages',
        locale: 'galactic-basic-to-klingon'
      })
      .end((_err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.deepEqual(res.body, {
          error: 'Invalid value for locale field'
        });
        done();
      });
  });

  test('should return an error on missing test field', (done) => {
    chai.request(server)
      .post('/api/translate')
      .send({
        locale: britishToAmerican
      })
      .end((_err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.deepEqual(res.body, {
          error: 'Required field(s) missing'
        });
        done();
      });
  });

  test('should return an error on missing locale', (done) => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'I do not know what to translate to',
      })
      .end((_err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.deepEqual(res.body, {
          error: 'Required field(s) missing'
        });
        done();
      });
  });

  test('should return an error on empty text', (done) => {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: '',
        locale: britishToAmerican
      })
      .end((_err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.deepEqual(res.body, {
          error: 'No text to translate'
        });
        done();
      });
  });

  test('should return if translation is unnecessary', (done) => {
    const text = 'Hello World!';
    chai.request(server)
      .post('/api/translate')
      .send({
        text,
        locale: americanToBritish
      })
      .end((_err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.deepEqual(res.body, {
          text,
          translation: ''//'Everything looks good to me!'
        });
        done();
      });
  });

});
