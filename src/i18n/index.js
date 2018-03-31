import i18n from 'i18next'
import XHRBackend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

import { dispatchToStore } from '../store'
import { changeLanguage } from '../store/actions/i18nActions'

i18n.on('languageChanged', lang => dispatchToStore(changeLanguage(lang)))

const loadLocales = (url, options, callback, data) => {
  try {
    let waitForLocale = require('bundle-loader!./locales/' + url)
    waitForLocale(locale => callback(locale, { status: '200' }))
  } catch (e) {
    callback(null, { status: '404' })
  }
}
i18n
  .use(XHRBackend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    debug: 'development' === process.env.NODE_ENV,

    fallbackLng: 'en',
    whitelist: false,
    nonExplicitWhitelist: true,
    load: 'languageOnly',
    ns: ['anontius'],
    defaultNS: 'anontius',

    interpolation: {
      escapeValue: false
    },

    react: {
      wait: true
    },

    backend: {
      loadPath: '{{lng}}/{{ns}}.json',
      parse: data => data,
      ajax: loadLocales
    },

    detection: {
      lookupQuerystring: 'lang',
      lookupCookie: 'anontius',
      lookupLocalStorage: 'anontius:i18nLang'
    }
  })

export default i18n
