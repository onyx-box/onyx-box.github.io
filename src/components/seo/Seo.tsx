import {useLanguage} from '@/hooks/useLanguage';
import {siteUrl} from '@/lib/seo';
import {useEffect} from 'react';

interface SeoProps {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: 'website' | 'article';
}

function setMeta(
    selector: string,
    attributes: Record<string, string>
) {
    let element = document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([name, value]) => {
        element?.setAttribute(name, value);
    });
}

function setLink(
    selector: string,
    attributes: Record<string, string>
) {
    let element = document.head.querySelector<HTMLLinkElement>(selector);

    if (!element) {
        element = document.createElement('link');
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([name, value]) => {
        element?.setAttribute(name, value);
    });
}

function removeElement(selector: string) {
    document.head.querySelector(selector)?.remove();
}

function resolveUrl(url?: string): string | undefined {
    if (!url) {
        return undefined;
    }

    return url.startsWith('http')
        ? url
        : `${siteUrl}${url}`;
}

export function Seo({title, description, path, image = '/images/brand/og-image.png', type = 'website'}: SeoProps) {
    const language = useLanguage();

    useEffect(() => {
        const canonicalUrl = `${siteUrl}${path}`;

        const imageUrl = resolveUrl(image);

        document.title = title;

        setMeta('meta[name="description"]', {
            name: 'description',
            content: description
        });

        setMeta('meta[name="author"]', {
            name: 'author',
            content: 'Michał Skrzyński'
        });

        setLink('link[rel="canonical"]', {
            rel: 'canonical',
            href: canonicalUrl
        });

        setMeta('meta[property="og:locale"]', {
            property: 'og:locale',
            content: language === 'pl' ? 'pl_PL' : 'en_US'
        });

        setMeta('meta[property="og:type"]', {
            property: 'og:type',
            content: type
        });

        setMeta('meta[property="og:title"]', {
            property: 'og:title',
            content: title
        });

        setMeta('meta[property="og:description"]', {
            property: 'og:description',
            content: description
        });

        setMeta('meta[property="og:url"]', {
            property: 'og:url',
            content: canonicalUrl
        });

        setMeta('meta[property="og:site_name"]', {
            property: 'og:site_name',
            content: 'Onyx Box'
        });

        setMeta('meta[name="twitter:card"]', {
            name: 'twitter:card',
            content: imageUrl ? 'summary_large_image' : 'summary'
        });

        setMeta('meta[name="twitter:title"]', {
            name: 'twitter:title',
            content: title
        });

        setMeta('meta[name="twitter:description"]', {
            name: 'twitter:description',
            content: description
        });

        if (imageUrl) {
            setMeta('meta[property="og:image"]', {
                property: 'og:image',
                content: imageUrl
            });

            setMeta('meta[name="twitter:image"]', {
                name: 'twitter:image',
                content: imageUrl
            });
        } else {
            removeElement('meta[property="og:image"]');
            removeElement('meta[name="twitter:image"]');
        }
    }, [title, description, path, image, type, language]);

    return null;
}
