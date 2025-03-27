const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

// NOTE: Cannot define this within Translator class because of Babel :(
// Would have to use switch/case instead
const locales = {
  'american-to-british': americanToBritish,
  'british-to-american': britishToAmerican
}

function americanToBritish(text) {
  return '';
}

function britishToAmerican(text) {
  return '';
}

class Translator {

  validateInput(text, locale) {
    if (text === '') {
      throw new Error('No text to translate');
    }
    if (!locale || !text) {
      throw new Error('Required field(s) missing');
    }
    if (!locales.hasOwnProperty(locale)) {
      throw new Error('Invalid value for locale field');
    }
  }

  translate(text, locale) {
    this.validateInput(text, locale);
    return locales[locale](text);
  }

}

module.exports = Translator;
