import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
