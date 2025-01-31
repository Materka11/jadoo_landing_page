import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ChangeEvent } from 'react';

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'localStorage',
  lookup() {
    return localStorage.getItem('lang') || undefined;
  },
  cacheUserLanguage(lng) {
    localStorage.setItem('lang', lng);
  },
});

void i18n
  .use(HttpBackend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

export const handleChangeLanguage = async (
  event: ChangeEvent<HTMLSelectElement>
) => {
  try {
    const newLang: string = event.target.value?.toLocaleLowerCase();
    localStorage.setItem('lang', newLang);
    await i18n.changeLanguage(newLang);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error changing language:', error);
  }
};
