import {useEffect} from 'react';

export function useReveal(dependencies: unknown[] = []) {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>(
            '.reveal:not(.visible)'
        );

        if (!elements.length) {
            return;
        }

        if (!('IntersectionObserver' in window)) {
            elements.forEach(element => element.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                });
            },
            {threshold: 0.12}
        );

        document.documentElement.classList.add('reveal-ready');
        elements.forEach(element => observer.observe(element));

        return () => {
            observer.disconnect();
            document.documentElement.classList.remove('reveal-ready');
        };
    }, dependencies);
}
