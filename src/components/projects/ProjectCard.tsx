import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useLanguage} from '@/hooks/useLanguage';
import {routeFor} from '@/lib/routes';
import type {Project} from '@/types/project';

export function ProjectCard({project}: { project: Project }) {

    const {t} = useTranslation('projects');

    const l = useLanguage();

    return (
        <article className="project-card">
            {project.cover
                ? <img src={project.cover} alt={project.title}/>
                : <div className="placeholder">&lt;/&gt;</div>
            }
            <div className="project-body">

                <p className="eyebrow">
                    {t(`categories.${project.category}`)}
                </p>

                <h3>{project.title}</h3>

                {project.translationKey && <p>
                    {t(`${project.translationKey}.summary`)}
                </p>}

                {project.summary && <p>
                    {project.summary}
                </p>}

                <div className="tags">
                    {project.stack.map(tag =>
                        <span key={tag}>{tag}</span>
                    )}
                </div>

                <Link to={routeFor(l, 'projects', project.slug)}>
                    {t('actions.show')}
                </Link>

            </div>
        </article>
    );
}
