const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

  const translator = new Translator();
  const britishToAmerican = 'british-to-american';
  const americanToBritish = 'american-to-british';

  test('should translate to british correctly 1', () => {
    const text = 'Mangoes are my favorite fruit.';
    assert.equal(
      translator.translate(text, americanToBritish),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });

  test('should translate to american correctly 1', () => {
    const text = 'We watched the footie match for a while.';
    assert.equal(
      translator.translate(text, britishToAmerican),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
  });

});
