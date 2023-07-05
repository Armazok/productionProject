import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: __IS__DEV__,
        supportedLngs: ['ru', 'en'],

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json', // Путь для загрузки языковых ресурсов
        },
    });

export default i18n;
