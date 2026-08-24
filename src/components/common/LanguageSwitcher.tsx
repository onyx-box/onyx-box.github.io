import {Link, useLocation} from 'react-router-dom';
import {alternate} from '@/lib/routes';
import {useLanguage} from '@/hooks/useLanguage';

export function LanguageSwitcher() {
    const language = useLanguage();
    const {pathname} = useLocation();

    const alternatePath = alternate(pathname);

    const englishPath = language === 'en'
        ? pathname
        : alternatePath;

    const polishPath = language === 'pl'
        ? pathname
        : alternatePath;

    return (
        <div
            className="language-switch"
            aria-label="Wybór języka"
        >
            <Link
                to={englishPath}
                lang="en"
                hrefLang="en"
                aria-current={language === 'en' ? 'page' : undefined}
            >
                EN
            </Link>

            <Link
                to={polishPath}
                lang="pl"
                hrefLang="pl"
                aria-current={language === 'pl' ? 'page' : undefined}
            >
                PL
            </Link>
        </div>
    );
}
