import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

type SupportedLanguage = 'en' | 'pl';

function languageFromPath(pathname: string): SupportedLanguage {
    return pathname === '/pl' || pathname.startsWith('/pl/')
        ? 'pl'
        : 'en';
}

export function LanguageSync() {
    const location = useLocation();
    const {i18n} = useTranslation();

    useEffect(() => {
        const language = languageFromPath(location.pathname);

        if (i18n.resolvedLanguage !== language) {
            void i18n.changeLanguage(language);
        }

        document.documentElement.lang = language;
    }, [location.pathname, i18n]);

    return null;
}
