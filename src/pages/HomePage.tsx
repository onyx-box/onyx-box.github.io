import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Seo} from '@/components/seo/Seo';
import {ProjectCard} from '@/components/projects/ProjectCard';
import {getProjects} from '@/content/projects';
import {useLanguage} from '@/hooks/useLanguage';
import {routeFor} from '@/lib/routes';
import {services} from '@/content/services';

export function HomePage() {
    const l = useLanguage();
    const {t} = useTranslation();
    const p = getProjects(l).filter(x => x.featured);
    return (
        <>
            <Seo title={t('seo.home.title')}
               description={t('seo.home.description')}
               path={l === 'pl' ? '/pl/' : '/'}/>
            <section className="hero container">
                <div>
                    <p className="eyebrow">
                        {t('me.role')}
                    </p>
                    <h1>{t('me.title')}</h1>
                    <p>{t('me.description')}</p>
                    <Link className="button" to={routeFor(l, 'projects')}>{t('actions.viewProjects')}</Link>
                </div>
                <aside>
                    <strong>{t('me.fullName')}</strong>
                    <p>{t('me.exp')}</p>
                </aside>
            </section>
            <section className="section dark">
                <div className="container">
                    <h2>{t('sections.projects.title')}</h2>
                    <div className="grid">
                        {
                            p.map(x => <ProjectCard key={x.slug} project={x}/>)
                        }
                    </div>
                </div>
            </section>
            <section id="services" className="section container">
                <h2>{t('nav.services')}</h2>
                <div className="services">
                    {services.map(({key, icon}) => (
                        <article key={key}>
                            <div className="icon">{icon}</div>

                            <h3>{t(`services.${key}.title`)}</h3>

                            <p>{t(`services.${key}.description`)}</p>
                        </article>
                    ))}
                </div>
            </section>
            <section id="about" className="section container">
                <h2>{t('nav.about')}</h2>
                <p>{t('me.about')}</p>
            </section>
            <section id="contact" className="section container">
                <h2>{t('nav.contact')}</h2>
                <a href="mailto:{t('me.email')}">{t('me.email')}</a>
            </section>
        </>
    );
}
