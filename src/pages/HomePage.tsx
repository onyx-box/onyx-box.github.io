import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '@/components/contact/ContactForm';
import { Seo } from '@/components/seo/Seo';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getProjects } from '@/content/projects';
import { useLanguage } from '@/hooks/useLanguage';
import { routeFor } from '@/lib/routes';
import { services } from '@/content/services';
import { siteConfig } from '@/content/site/config';

export function HomePage() {
  const l = useLanguage();
  const { t } = useTranslation();
  const p = getProjects(l).filter((x) => x.featured);

  return (
    <>
      <Seo
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        path={l === 'pl' ? '/pl/' : '/'}
      />
      <section className="hero container">
        <div>
          <p className="eyebrow">{t('me.role')}</p>
          <h1>{t('me.fullName')}</h1>
          <p className="hero-lead">
            {l === 'pl'
              ? 'Tworzę aplikacje i łączę systemy.'
              : 'I build applications and connect systems.'}
          </p>
          <p>{t('me.description')}</p>
          <div className="actions">
            <Link className="button primary" to={routeFor(l, 'projects')}>
              {t('actions.viewProjects')}
            </Link>
            <a className="button secondary" href="#contact">
              {t('nav.contact')}
            </a>
          </div>
          <div className="hero-links">
            <a href={siteConfig.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <div className="hero-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="status">{t('cooperation')}</div>
          <p>{t('me.exp')}</p>
          <div className="stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>.NET</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>REST API</span>
            <span>{l === 'pl' ? 'Integracje' : 'Integrations'}</span>
          </div>
        </aside>
      </section>
      <section className="section featured">
        <div className="container">
          <h2>{t('sections.projects.title')}</h2>
          <div className="grid">
            {p.map((x) => (
              <ProjectCard key={x.slug} project={x} />
            ))}
          </div>
          <Link className="button secondary" to={routeFor(l, 'projects')}>
            {t('actions.viewProjects')}
          </Link>
        </div>
      </section>
      <section id="services" className="section container">
        <h2>{t('nav.services')}</h2>
        <div className="services">
          {services.map(({ key }) => (
            <article key={key} className="service">
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

      <section id="cooperation" className="section container cta">
        <div>
          <p className="eyebrow">{t('sections.hire.title')}</p>
          <h2>{t('sections.hire.question')}</h2>
          <p>{t('sections.hire.answer')}</p>
        </div>
        <a className="button light" href="#contact">
          {t('sections.hire.button')}
        </a>
      </section>

      <section id="contact" className="section container contact">
        <div className="section-heading">
          <p className="eyebrow">{t('sections.contact.title')}</p>
          <h2>{t('sections.contact.short')}</h2>
          <p>{t('sections.contact.description')}</p>
        </div>
        <ContactForm />
        <div className="contact-card">
          <div className="contact-item">
            <strong>Email</strong>
            <a href={`mailto:${t('me.email')}`}>{t('me.email')}</a>
          </div>
          <div className="contact-item">
            <strong>GitHub</strong>
            <a href={siteConfig.github} target="_blank" rel="noopener">
              github.com/onyx-box
            </a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn</strong>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener">
              {t('me.fullName')}
            </a>
          </div>
          <div className="contact-item">
            <strong>{t('location')}</strong>
            {t('me.location')}
          </div>
        </div>
      </section>

      <section id="support" className="section container">
        <h2>{t('sections.support.title')}</h2>
        <p>{t('sections.support.description')}</p>
        <div>
          <a href={siteConfig.buyMeACoffee} target="_blank" rel="noopener">
            {t('sections.support.button')}
          </a>
        </div>
      </section>
    </>
  );
}
