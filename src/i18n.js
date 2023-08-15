import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: { translation: translationEN },
        ru: { translation: translationRU }
    },
    debug: true,
  });

export default i18n;