import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../translations/en.json'
import tn from '../translations/tn.json'
import fn from '../translations/fn.json'
import hn from '../translations/hn.json'
i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: {
        en: en,
        tn: tn,
        fn: fn,
        hn: hn
    },
    interpolation: {
        escapeValue: false
    }

});
export default i18n;