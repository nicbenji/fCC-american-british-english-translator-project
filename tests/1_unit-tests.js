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
      translator.getTranslation(text, americanToBritish),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });

  test('should translate to british correctly 2', () => {
    const text = 'I ate yogurt for breakfast.';
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
  });

  test('should translate to british correctly 3', () => {
    const text = "We had a party at my friend's condo.";
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      'We had a party at my friend\'s <span class="highlight">flat</span>.'
    );
  });

  test('should translate to british correctly 4', () => {
    const text = 'Can you toss this in the trashcan for me?';
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      'Can you toss this in the <span class="highlight">bin</span> for me?'
    );
  });

  test('should translate to british correctly 5', () => {
    const text = 'The parking lot was full.';
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      'The <span class="highlight">car park</span> was full.'
    );
  });

  test('should translate to british correctly 6', () => {
    const text = 'Like a high tech Rube Goldberg machine.';
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      'Like a high tech <span class="highlight">Heath Robinson device</span>.'
    );
  });

  test('should translate to british correctly 7', () => {
    const text = 'To play hooky means to skip class or work.';
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      'To <span class="highlight">bunk off</span> means to skip class or work.'
    );
  });

  test('should translate to british correctly 8', () => {
    const text = 'No Mr. Bond, I expect you to die.';
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    );
  });

  test('should translate to british correctly 9', () => {
    const text = 'Dr. Grosh will see you now.';
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      '<span class="highlight">Dr</span> Grosh will see you now.'
    );
  });

  test('should translate to british correctly 10', () => {
    const text = 'Lunch is at 12:15 today.';
    assert.equal(
      translator.getTranslation(text, americanToBritish),
      'Lunch is at <span class="highlight">12.15</span> today.'
    );
  });

  test('should translate to american correctly 1', () => {
    const text = 'We watched the footie match for a while.';
    assert.equal(
      translator.getTranslation(text, britishToAmerican),
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
  });


});
