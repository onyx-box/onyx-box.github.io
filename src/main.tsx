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
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-ext-400.css';

import '@fontsource/inter/latin-700.css';
import '@fontsource/inter/latin-ext-700.css';

import '@fontsource/inter/latin-800.css';
import '@fontsource/inter/latin-ext-800.css';

import '@fontsource/jetbrains-mono/latin-600.css';
import '@fontsource/jetbrains-mono/latin-ext-600.css';
import '@/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Providers>
            <App/>
        </Providers>
    </React.StrictMode>
);
