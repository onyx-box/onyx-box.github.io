import {Link, useParams} from 'react-router-dom';
import {ProjectGallery} from '@/components/projects/ProjectGallery';
import {getProject} from '@/content/projects';
import {useLanguage} from '@/hooks/useLanguage';
import {routeFor} from '@/lib/routes';
import {useTranslation} from "react-i18next";

export function ProjectDetailsPage() {
    const l = useLanguage();
    const {t} = useTranslation();
    const {slug = ''} = useParams();
    const p = getProject(l, slug);
    if (!p) return <p>404</p>;
    return (
        <>
            <article className="page container">
                <Link to={routeFor(l, 'projects')}>← {t('nav.projects')}</Link>
                <section className="detail">
                    <div>
                        <p className="eyebrow">{p.type}</p>
                        <h1>{p.title}</h1>
                        <p>{p.summary}</p>
                        <div className="tags">
                            {
                                p.stack.map(x => <span key={x}>{x}</span>)
                            }
                        </div>
                        {
                            p.externalUrl && <a href={p.externalUrl}>Website ↗</a>
                        }
                    </div>
                    {p.cover && <img src={p.cover} alt=""/>}
                </section>
                <h2>{l === 'pl' ? 'Moja rola' : 'My role'}</h2><p>{p.role}</p>
                <h2>{l === 'pl' ? 'Funkcje' : 'Features'}</h2>
                <ul>{p.features.map(x => <li key={x}>{x}</li>)}</ul>
                <ProjectGallery images={p.gallery} title={p.title}/>
            </article>
        </>
    );
}
