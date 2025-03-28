'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;

      try {
        const translation = translator.getTranslation(text, locale);
        return res.json({ text, translation });
      } catch (error) {
        return res.json({ error: error.message });
      }

    });
};
