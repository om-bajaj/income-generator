import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/common.json'
import hi from './locales/hi/common.json'
import mr from './locales/mr/common.json'
import te from './locales/te/common.json'
import ta from './locales/ta/common.json'

const resources = {
  en: { common: en },
  hi: { common: hi },
  mr: { common: mr },
  te: { common: te },
  ta: { common: ta },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    supportedLngs: ['en', 'hi', 'mr', 'te', 'ta'],
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'skillNavigator.lang',
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
