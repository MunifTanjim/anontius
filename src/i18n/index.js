import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { dispatchToStore } from '../store'
import { changeLanguage } from '../store/actions/i18nActions'

i18n.on('languageChanged', (lang) => dispatchToStore(changeLanguage(lang)))

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: 'development' === process.env.NODE_ENV,

    fallbackLng: 'en',
    whitelist: false,
    nonExplicitWhitelist: true,
    load: 'languageOnly',
    ns: ['anontius'],
    defaultNS: 'anontius',

    interpolation: {
      escapeValue: false,
    },

    react: {},

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      parse: (data) => JSON.parse(data),
    },

    detection: {
      lookupQuerystring: 'lang',
      lookupCookie: 'anontius',
      lookupLocalStorage: 'anontius:i18nLang',
    },
  })

export default i18n
