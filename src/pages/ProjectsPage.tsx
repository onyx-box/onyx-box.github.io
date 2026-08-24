import {useState} from 'react';
import {ProjectCard} from '@/components/projects/ProjectCard';
import {Seo} from '@/components/seo/Seo';
import {getProjects} from '@/content/projects';
import {useLanguage} from '@/hooks/useLanguage';
import type {ProjectCategory} from '@/types/project';
import {useTranslation} from "react-i18next";

export function ProjectsPage() {
    const l = useLanguage();
    const {t} = useTranslation();
    const [c, setC] = useState<ProjectCategory | 'all'>('all');
    const all = getProjects(l);
    const list = c === 'all' ? all : all.filter(x => x.category === c);
    const categories = [
        'all',
        'enterprise',
        'web-application',
        'wordpress',
        'open-source'
    ] as const;
    return (
        <>
            <section className="page container">
                <Seo title={t('seo.projects.title')} description={t('seo.projects.description')} path={l === 'pl' ? '/pl/projekty' : '/projects'}/>
                <h1>{t('nav.projects')}</h1>
                <div className="filters">
                    {
                        (categories).map(category =>
                            <button onClick={() => setC(category)} className={c === category ? 'active' : ''} key={category}>
                                {t(`filters.${category}`)}
                            </button>)
                    }
                </div>
                <div className="grid">
                    {
                        list.map(x =>
                            <ProjectCard key={x.slug} project={x}/>
                        )
                    }
                </div>
            </section>
        </>
    );
}
