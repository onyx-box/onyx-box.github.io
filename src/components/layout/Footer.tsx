import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useLanguage} from '@/hooks/useLanguage';
import {routeFor} from '@/lib/routes';
import {siteConfig} from '@/content/site/config';

export function Footer() {
    const l = useLanguage();
    const {t} = useTranslation();
    return (
        <>
            <footer className="site-footer">
                <p>© {new Date().getFullYear()} {t('name')} · {siteConfig.owner}</p>
                <nav>
                    <Link to={routeFor(l, 'privacy')}>{t('footer.privacy')}</Link>
                    <a href={siteConfig.buyMeACoffee}>{t('footer.support')} ☕</a>
                </nav>
            </footer>
        </>
    );
}
