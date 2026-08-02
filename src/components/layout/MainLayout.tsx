import {Outlet} from 'react-router-dom';
import {Header} from './Header';
import {Footer} from './Footer';
import {LanguageSync} from "@/i18n/LanguageSync";

export function MainLayout() {
    return (
        <>
            <LanguageSync />
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}
