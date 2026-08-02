import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {LanguageSwitcher} from '@/components/common/LanguageSwitcher';
import {useLanguage} from '@/hooks/useLanguage';
import {routeFor} from '@/lib/routes';

export function Header() {
    const l = useLanguage();
    const {t} = useTranslation();
    return (
        <>
            <header className="site-header">
                <Link className="brand" to={routeFor(l, 'home')}>
                    <span>&lt;/&gt;</span>{t('name')}
                </Link>
                <nav>
                    <Link to={routeFor(l, 'projects')}>{t('nav.projects')}</Link>
                    <a href={`${routeFor(l, 'home')}#services`}>{t('nav.services')}</a>
                    <a href={`${routeFor(l, 'home')}#about`}>{t('nav.about')}</a>
                    <a href={`${routeFor(l, 'home')}#contact`}>{t('nav.contact')}</a>
                </nav>
                <LanguageSwitcher/>
            </header>
        </>
    );
}
