import {Languages} from 'lucide-react';
import {Link, useLocation} from 'react-router-dom';
import {alternate} from '@/lib/routes';
import {useLanguage} from '@/hooks/useLanguage';

export function LanguageSwitcher() {
    const l = useLanguage();
    const {pathname} = useLocation();
    return (
        <>
            <Link className="language-switcher" to={alternate(pathname)}>
                <Languages size={17}/>{l === 'pl' ? 'EN' : 'PL'}
            </Link>
        </>
    );
}
