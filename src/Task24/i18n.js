
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend';

import enTranslation from './en.json';
import esTranslation from './es.json';

i18n
  .use(LanguageDetector) 
  .use(XHR) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
