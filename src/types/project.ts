export type Language = 'en' | 'pl';
export type ProjectCategory =
    'enterprise'
    | 'web-application'
    | 'backend'
    | 'wordpress'
    | 'open-source'
    | 'automation'
    | 'integration';

export type ProjectStatus =
    | 'production'
    | 'active'
    | 'completed'
    | 'development'
    | 'commercial'
    | 'open-source'
    | 'internal';

export interface Project {

    slug: string;
    title: string;
    translationKey?: string;
    category: ProjectCategory;
    stack: string[];

    cover?: string;
    gallery?: string[];

    featured: boolean;

    externalUrl?: string;
    repository?: string;

    demo?: string;
    year?: number;
    status?: ProjectStatus;

    type: string;
    summary: string;
    role: string;
    features: string[];
}
