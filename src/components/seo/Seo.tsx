import {useLanguage} from '@/hooks/useLanguage';
import {siteUrl} from '@/lib/seo';

interface SeoProps {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: 'website' | 'article';
}

export function Seo({title, description, path, image = '/images/brand/og-image.png', type = 'website'}: SeoProps) {
    const language = useLanguage();

    const canonicalUrl = `${siteUrl}${path}`;
    const imageUrl = image.startsWith('http')
        ? image
        : `${siteUrl}${image}`;

    return (
        <>
            <title>{title}</title>

            <meta name="description" content={description}/>
            <meta name="author" content="Michał Skrzyński"/>

            <link rel="canonical" href={canonicalUrl}/>

            <meta property="og:locale" content={language === 'pl' ? 'pl_PL' : 'en_US'}/>
            <meta property="og:type" content={type}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={canonicalUrl}/>
            <meta property="og:image" content={imageUrl}/>
            <meta property="og:site_name" content="Onyx Box"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={imageUrl}/>
        </>
    );
}
