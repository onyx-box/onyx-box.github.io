import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enCommon from './en/common.json';
import plCommon from './pl/common.json';
import enHome from './en/home.json';
import plHome from './pl/home.json';
import enProjects from './en/projects.json';
import plProjects from './pl/projects.json';
import enPrivacy from './en/privacy.json';
import plPrivacy from './pl/privacy.json';

void i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: enCommon,
                home: enHome,
                projects: enProjects,
                privacy: enPrivacy
            },
            pl: {
                common: plCommon,
                home: plHome,
                projects: plProjects,
                privacy: plPrivacy
            }
        },
        lng: location.pathname.startsWith('/pl') ? 'pl' : 'en',
        fallbackLng: 'en',
        defaultNS: 'common',
        ns: ['common', 'home', 'projects'],
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    });
export default i18n;
