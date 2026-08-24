const pathname = window.location.pathname;

document.documentElement.lang =
    pathname === '/pl' || pathname.startsWith('/pl/')
        ? 'pl'
        : 'en';
