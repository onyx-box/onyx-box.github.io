import type {Language, Project} from '@/types/project';

const source = [{
    "slug": "mam tanio",
    "title": {"en": "Mam tanio", "pl": "Mam tanio"},
    "type": {"en": "Responsive web application", "pl": "Responsywna aplikacja webowa"},
    "summary": {
        "en": "A responsive system for dealer offers, discounts and a fuel rewards programme.",
        "pl": "Responsywny system ofert dealerskich, rabatów i programu paliwowego."
    },
    "role": {
        "en": "Backend, frontend, API integrations and responsive web interfaces.",
        "pl": "Backend, frontend, integracje API i responsywne interfejsy webowe."
    },
    "features": {
        "en": ["customer dashboard", "dealer dashboard", "offer management", "fuel rewards", "mobile-friendly interface"],
        "pl": ["panel klienta", "panel dealera", "zarządzanie ofertami", "program paliwowy", "interfejs mobilny"]
    },
    "category": "web-application",
    "status": "commercial",
    "featured": true,
    "stack": ["React", "TypeScript", ".NET", "MySQL", "REST API", "JWT"],
    "cover": "/images/projects/kanister/offers-desktop.webp",
    "gallery": ["/images/projects/kanister/offers-desktop.webp", "/images/projects/kanister/dealer-dashboard.webp", "/images/projects/kanister/mobile-offers.webp", "/images/projects/kanister/mobile-fuel-summary.webp"]
}, {
    "slug": "stn",
    "title": {"en": "STN Events", "pl": "STN Events"},
    "type": {"en": "Event management platform", "pl": "Platforma obsługi wydarzeń"},
    "summary": {
        "en": "Publishing events and managing participant registrations.",
        "pl": "Publikowanie wydarzeń i obsługa zapisów uczestników."
    },
    "role": {
        "en": "Full-stack development, registration limits and responsive interfaces.",
        "pl": "Rozwój full-stack, limity zapisów i responsywne interfejsy."
    },
    "features": {
        "en": ["event catalogue", "registration", "seat limits", "responsive views"],
        "pl": ["katalog wydarzeń", "zapisy", "limity miejsc", "widoki responsywne"]
    },
    "category": "web-application",
    "status": "commercial",
    "featured": true,
    "stack": ["React", "TypeScript", ".NET", "MySQL", "REST API"],
    "cover": "/images/projects/stn/events-home-desktop.webp",
    "gallery": ["/images/projects/stn/events-home-desktop.webp", "/images/projects/stn/event-details-desktop.webp", "/images/projects/stn/events-home-mobile.webp", "/images/projects/stn/event-details-mobile.webp"]
}, {
    "slug": "sleshy",
    "title": {"en": "Sleshy", "pl": "Sleshy"},
    "type": {"en": "Social commerce platform", "pl": "Platforma social commerce"},
    "summary": {
        "en": "A social content platform connecting creators, campaigns and product integrations.",
        "pl": "Platforma społecznościowa łącząca twórców, kampanie i integracje produktowe."
    },
    "role": {
        "en": "Backend and frontend development, e-commerce integrations and transactional communication.",
        "pl": "Backend i frontend, integracje e-commerce oraz komunikacja transakcyjna."
    },
    "features": {
        "en": ["creator profiles", "campaigns", "collaborations", "product pins", "e-commerce plugins"],
        "pl": ["profile twórców", "kampanie", "współprace", "piny produktowe", "wtyczki e-commerce"]
    },
    "category": "enterprise",
    "status": "commercial",
    "featured": true,
    "stack": ["Java", "Spring", "React", "PostgreSQL", "WordPress", "Magento", "PrestaShop"],
    "cover": "/images/projects/sleshy/profile-feed.webp",
    "gallery": ["/images/projects/sleshy/profile-feed.webp", "/images/projects/sleshy/campaign-invitations.webp", "/images/projects/sleshy/collaborations-dashboard.webp", "/images/projects/sleshy/invitation-email.webp"]
}, {
    "slug": "evenado",
    "title": {"en": "Evenado", "pl": "Evenado"},
    "type": {"en": "Event and ticketing platform", "pl": "Platforma wydarzeń i biletów"},
    "summary": {
        "en": "Event creation, ticket sales, registration and payment integrations.",
        "pl": "Tworzenie wydarzeń, sprzedaż biletów, rejestracja i integracje płatności."
    },
    "role": {"en": "Full-stack architecture and development.", "pl": "Architektura i rozwój full-stack."},
    "features": {
        "en": ["event management", "ticket types", "checkout", "participant data"],
        "pl": ["zarządzanie wydarzeniami", "typy biletów", "checkout", "dane uczestników"]
    },
    "category": "web-application",
    "status": "commercial",
    "featured": true,
    "stack": ["React", "TypeScript", ".NET 8", "MySQL", "REST API"],
    "cover": "/images/projects/evenado/events-list.webp",
    "gallery": ["/images/projects/evenado/events-list.webp", "/images/projects/evenado/event-details.webp"]
}, {
    "slug": "forigi",
    "title": {"en": "Forigi / Bankier.pl Scraper", "pl": "Forigi / scraper Bankier.pl"},
    "type": {"en": "Comment collection and moderation platform", "pl": "Platforma zbierania i moderacji komentarzy"},
    "summary": {
        "en": "Collecting, filtering and analysing comments from the Bankier.pl investment forum.",
        "pl": "Zbieranie, filtrowanie i analiza komentarzy z forum inwestycyjnego Bankier.pl."
    },
    "role": {
        "en": "Data collection, moderation workflows, search and report exports.",
        "pl": "Pobieranie danych, procesy moderacji, wyszukiwanie i eksport raportów."
    },
    "features": {
        "en": ["comment collection", "filters", "moderation", "PDF/XLSX exports"],
        "pl": ["pobieranie komentarzy", "filtry", "moderacja", "eksport PDF/XLSX"]
    },
    "category": "web-application",
    "status": "commercial",
    "featured": false,
    "stack": ["Node.js 18", "SolidJS", "Tailwind CSS", "Vite", "Axios", "Mongoose", "MongoDB", "Yup"],
    "cover": "/images/projects/forigi/comments-dashboard.webp",
    "gallery": ["/images/projects/forigi/comments-dashboard.webp"]
}, {
    "slug": "sql-format",
    "title": {"en": "SQLFormat Bash integration", "pl": "Integracja Bash z SQLFormat"},
    "type": {"en": "Open-source contribution", "pl": "Wkład open-source"},
    "summary": {
        "en": "A Bash integration accepted into the official SQLFormat API documentation.",
        "pl": "Integracja Bash zaakceptowana do oficjalnej dokumentacji API SQLFormat."
    },
    "role": {
        "en": "Author of the Bash example using curl and jq.",
        "pl": "Autor przykładu Bash wykorzystującego curl i jq."
    },
    "features": {
        "en": ["CLI input", "file input", "stdin", "JSON API"],
        "pl": ["argument CLI", "plik", "stdin", "API JSON"]
    },
    "category": "open-source",
    "status": "open-source",
    "featured": false,
    "stack": ["Bash", "curl", "jq", "REST API"],
    "cover": "",
    "gallery": [],
    "externalUrl": "https://sqlformat.org/api/"
}, {
    "slug": "g-biz",
    "title": {"en": "G-Biz", "pl": "G-Biz"},
    "type": {"en": "WordPress / Elementor website", "pl": "Strona WordPress / Elementor"},
    "summary": {
        "en": "Responsive website implemented in Elementor from a Figma design.",
        "pl": "Responsywna strona wdrożona w Elementorze na podstawie projektu Figma."
    },
    "role": {
        "en": "Figma implementation, responsive behaviour and frontend refinement.",
        "pl": "Implementacja Figma, responsywność i dopracowanie frontendu."
    },
    "features": {
        "en": ["Figma implementation", "Elementor", "responsive layout"],
        "pl": ["implementacja Figma", "Elementor", "responsywność"]
    },
    "category": "wordpress",
    "status": "commercial",
    "featured": false,
    "stack": ["WordPress", "Elementor", "Figma"],
    "cover": "/images/projects/wordpress/g-biz.webp",
    "gallery": ["/images/projects/wordpress/g-biz.webp"]
}, {
    "slug": "odwazni",
    "title": {"en": "Odważni", "pl": "Odważni"},
    "type": {"en": "WordPress / Elementor website", "pl": "Strona WordPress / Elementor"},
    "summary": {
        "en": "Responsive website implemented in Elementor from a Figma design.",
        "pl": "Responsywna strona wdrożona w Elementorze na podstawie projektu Figma."
    },
    "role": {
        "en": "Figma implementation, responsive behaviour and frontend refinement.",
        "pl": "Implementacja Figma, responsywność i dopracowanie frontendu."
    },
    "features": {
        "en": ["Figma implementation", "Elementor", "responsive layout"],
        "pl": ["implementacja Figma", "Elementor", "responsywność"]
    },
    "category": "wordpress",
    "status": "commercial",
    "featured": false,
    "stack": ["WordPress", "Elementor", "Figma"],
    "cover": "/images/projects/wordpress/odwazni.webp",
    "gallery": ["/images/projects/wordpress/odwazni.webp"]
}, {
    "slug": "sleshy-landing",
    "title": {"en": "Sleshy Landing Page", "pl": "Sleshy Landing Page"},
    "type": {"en": "WordPress / Elementor website", "pl": "Strona WordPress / Elementor"},
    "summary": {
        "en": "Responsive website implemented in Elementor from a Figma design.",
        "pl": "Responsywna strona wdrożona w Elementorze na podstawie projektu Figma."
    },
    "role": {
        "en": "Figma implementation, responsive behaviour and frontend refinement.",
        "pl": "Implementacja Figma, responsywność i dopracowanie frontendu."
    },
    "features": {
        "en": ["Figma implementation", "Elementor", "responsive layout"],
        "pl": ["implementacja Figma", "Elementor", "responsywność"]
    },
    "category": "wordpress",
    "status": "commercial",
    "featured": false,
    "stack": ["WordPress", "Elementor", "Figma"],
    "cover": "/images/projects/wordpress/sleshy-landing.webp",
    "gallery": ["/images/projects/wordpress/sleshy-landing.webp"]
}] as const;

export function getProjects(lang: Language): Project[] {
    return source.map((p) => ({
        ...p,
        title: p.title[lang],
        type: p.type[lang],
        summary: p.summary[lang],
        role: p.role[lang],
        features: [...p.features[lang]],
        stack: [...p.stack],
        gallery: p.gallery ? [...p.gallery] : []
    }))
}

export function getProject(lang: Language, slug: string) {
    return getProjects(lang).find(p => p.slug === slug)
}
