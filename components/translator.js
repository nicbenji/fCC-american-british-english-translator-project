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
  const translationTbls = [
    { table: americanToBritishSpelling },
    { table: americanToBritishTitles },
    { table: americanOnly }
  ]

  return translate(text, translationTbls, '.');
}

function britishToAmerican(text) {
  const translationTbls = [
    {
      table: americanToBritishSpelling,
      reversed: true
    },
    { table: americanToBritishTitles, reversed: true },
    { table: britishOnly }
  ]

  return translate(text, translationTbls);
}

function translate(text, translationTbls, timeSeparator = ':') {
  const sortedTbls = [];
  for (let tbl of translationTbls) {
    sortedTbls.push(sortTranslationTbl(tbl));
  }

  let translation = text;
  for (let tbl of sortedTbls) {
    translation = replacer(translation, tbl);
  }

  translation = timeReplacer(translation, timeSeparator);

  if (text === translation) {
    return 'Everything looks good to me!';
  }
  return translation;
}

// NOTE: Not supported on every environment, objects might be returned unsorted
function sortTranslationTbl(translationTbl) {
  if (translationTbl.reversed) {
    return Object.fromEntries(
      Object.entries(translationTbl.table)
        .sort((a, b) => b[1].length - a[1].length)
        .map(([key, value]) => [value, key])
    );
  }
  return Object.fromEntries(
    Object.entries(translationTbl.table)
      .sort((a, b) => b[0].length - a[0].length)
  );
}

function replacer(text, translationTbl) {
  for (let [key, value] of Object.entries(translationTbl)) {
    const escapeRegex = /[.*+?^${}()|[\]\\]/g;
    const replacedKey = key.replace(escapeRegex, '\\$&');
    text = text.replace(
      new RegExp(`\\b${replacedKey}(?=\\W|$)`, 'gi'),
      `<span class="highlight">${value}</span>`
    );
  }
  return text;
}

function timeReplacer(text, separator) {
  if (separator !== '.' && separator !== ':') {
    throw new Error('Invalid separator');
  }
  const timestamps = text.match(/(?:[0-1]?[0-9]|2[0-3])([.:])[0-5][0-9]/g);
  if (!timestamps) {
    return text;
  }
  for (let time of timestamps) {
    const timeWithNewSeparator = time.replace(/(\.|:)/, separator);
    text = text.replace(time, `<span class="highlight">${timeWithNewSeparator}</span>`);
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

  getTranslation(text, locale) {
    this.validateInput(text, locale);
    return locales[locale](text);
  }

}

module.exports = Translator;
