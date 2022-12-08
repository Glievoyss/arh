import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

// import Cache from 'i18next-localstorage-cache';
// import LanguageDetector from 'i18next-browser-languagedetector';

export const DEFAULT_LANGUAGE = 'en';
export const LNG = 'lng';

let i18nInstance = null;

export function getI18nInstance() {
  if (!i18nInstance) {
    throw new Error(
      'i18n instance most be created before getI18nInstance call'
    );
  }

  return i18nInstance;
}

// returns current language
export function getLanguage() {
  if (window.localStorage) {
    return window.localStorage.getItem(LNG) || DEFAULT_LANGUAGE;
  }

  return DEFAULT_LANGUAGE;
}

// changes language. Causes full rerender
export function setLanguage(lng) {
  if (window.localStorage) {
    window.localStorage.setItem(LNG, lng);
  }

  if (i18nInstance) {
    i18nInstance.changeLanguage(lng);
  }
}

function i18nSetup(config) {
  const options = {
    backend: {
      loadPath: config.loadPath
    },

    lng: getLanguage(),

    fallbackLng: 'en',
    load: 'currentOnly',
    defaultNS: false,
    ns: ['activity'],

    react: {
      // useSuspense: false,
      wait: true // globally set to wait for loaded translations in translate hoc
      // exposeNamespace: true // exposes namespace on data-i18next-options to be used in eg. locize-editor
    },

    debug:
      ['master', 'development'].indexOf(process.env.REACT_APP_ENVIRONMENT) > -1,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: (value, format) => {
        //, lng  -  add if will be many languages
        if (format === 'uppercase') {
          return value.toUpperCase();
        }
        return value;
      }
    }
  };

  i18n
    .use(XHR)
    // .use(Cache)
    // .use(LanguageDetector)
    .init(options);

  // i18n.loadNamespaces(config.defaultNamespaces);
  i18n.loadNamespaces(['activity']);

  i18nInstance = i18n;

  return i18n;
}

export default i18nSetup;
