import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../Translate/en.json';
import frTranslation from '../Translate/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'fr', // Langue de secours
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
