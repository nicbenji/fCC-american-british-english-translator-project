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

  test('should translate to british correctly 2', () => {
    const text = 'I ate yogurt for breakfast.';
    assert.equal(
      translator.translate(text, americanToBritish),
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
  });

  test('should translate to british correctly 3', () => {
    const text = "We had a party at my friend's condo.";
    assert.equal(
      translator.translate(text, americanToBritish),
      'We had a party at my friend\'s <span class="highlight">flat</span>.'
    );
  });

  test('should translate to british correctly 4', () => {
    const text = 'Can you toss this in the trashcan for me?';
    assert.equal(
      translator.translate(text, americanToBritish),
      'Can you toss this in the <span class="highlight">bin</span> for me?'
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
