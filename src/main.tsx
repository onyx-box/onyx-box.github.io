const r = sessionStorage.getItem('redirect');
if (r) {
    sessionStorage.removeItem('redirect');
    const u = new URL(r);
    history.replaceState(null, '', u.pathname + u.search + u.hash)
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from '@/app/App';
import {Providers} from '@/app/providers';
import '@/i18n/config';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

import '@fontsource/jetbrains-mono/600.css';
import '@/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Providers>
            <App/>
        </Providers>
    </React.StrictMode>
);
