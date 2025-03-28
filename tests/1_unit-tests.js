const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

  const translator = new Translator();
  const britishToAmerican = 'british-to-american';
  const americanToBritish = 'american-to-british';

  suite('american to british', () => {

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

  });

  suite('british to american', () => {

    test('should translate to american correctly 1', () => {
      const text = 'We watched the footie match for a while.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
    });

    test('should translate to american correctly 2', () => {
      const text = 'Paracetamol takes up to an hour to work.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
    });

    test('should translate to american correctly 3', () => {
      const text = 'First, caramelise the onions.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'First, <span class="highlight">caramelize</span> the onions.'
      );
    });

    test('should translate to american correctly 4', () => {
      const text = 'I spent the bank holiday at the funfair.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
      );
    });

    test('should translate to american correctly 5', () => {
      const text = 'I had a bicky then went to the chippy.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
      );
    });

    test('should translate to american correctly 6', () => {
      const text = "I've just got bits and bobs in my bum bag.";
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
      );
    });

    test('should translate to american correctly 7', () => {
      const text = 'The car boot sale at Boxted Airfield was called off.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
      );
    });

    test('should translate to american correctly 8', () => {
      const text = 'Have you met Mrs Kalyani?';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'Have you met <span class="highlight">Mrs.</span> Kalyani?'
      );
    });

    test('should translate to american correctly 9', () => {
      const text = "Prof Joyner of King's College, London.";
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
      );
    });

    test('should translate to american correctly 10', () => {
      const text = 'Tea time is usually around 4 or 4.30.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
      );
    });


  });

  // NOTE: Don't know the purpose of these, this is already tested above
  suite('highlights', () => {

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

    test('should translate to american correctly 1', () => {
      const text = 'We watched the footie match for a while.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
    });

    test('should translate to american correctly 2', () => {
      const text = 'Paracetamol takes up to an hour to work.';
      assert.equal(
        translator.getTranslation(text, britishToAmerican),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
    });

  });

});
