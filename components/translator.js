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
  let translation = text;
  translation = replacer(translation, americanOnly);
  translation = replacer(translation, americanToBritishSpelling);
  translation = replacer(translation, americanToBritishTitles);

  if (text === translation) {
    return 'Everything looks good to me!';
  }
  return translation;
}

function britishToAmerican(text) {
  let translation = text;
  translation = replacer(translation, britishOnly);
  translation = replacer(translation, americanToBritishSpelling, true);
  translation = replacer(translation, americanToBritishTitles, true);

  if (text === translation) {
    return 'Everything looks good to me!';
  }
  return translation;
}

function replacer(text, translateObj, reversed = false) {
  if (!reversed) {
    for (let [key, value] of Object.entries(translateObj)) {
      text = text.replace(new RegExp(key, 'gi'), `<span class="highlight">${value}</span>`);
    }
    return text;
  }
  for (let [key, value] of Object.entries(translateObj)) {
    text = text.replace(new RegExp(value, 'gi'), `<span class="highlight">${key}</span>`);
  }
  return text;
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
