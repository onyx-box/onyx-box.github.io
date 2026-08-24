import { Trans, useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { routeFor } from '@/lib/routes';
import {siteConfig} from '@/content/site/config';

interface PrivacySection {
    title: string;
    content: string[];
}

export function PrivacyPage() {

    const {t} = useTranslation('privacy');
    const language = useLanguage();

    const translatedSections = t('sections', {
        returnObjects: true,
    });

    const sections: PrivacySection[] = Array.isArray(translatedSections)
        ? (translatedSections as PrivacySection[])
        : [];

    return (
        <>
            <article className="page container document">
                <p className="eyebrow">{t('eyebrow')}</p>

                <p className="document-intro">
                    <Trans
                        ns="privacy"
                        i18nKey="intro"
                        components={{
                            github: (
                                <a
                                    href={siteConfig.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            ),
                            strong: <strong />,
                        }}
                    />
                </p>

                <div className="document-sections">
                    {sections.map((section, sectionIndex) => (
                        <section
                            className="document-section"
                            key={`section-${sectionIndex}`}
                        >
                            <h2>{section.title}</h2>

                            {section.content.map((_, paragraphIndex) => (
                                <p key={`paragraph-${sectionIndex}-${paragraphIndex}`}>
                                    <Trans
                                        ns="privacy"
                                        i18nKey={`sections.${sectionIndex}.content.${paragraphIndex}`}
                                        components={{
                                            github: (
                                                <a
                                                    href={siteConfig.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                />
                                            ),
                                            email: (
                                                <a href="mailto:skrzynski.michal@gmail.com" />
                                            ),
                                            linkedin: (
                                                <a
                                                    href={siteConfig.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                />
                                            ),
                                            coffee: (
                                                <a
                                                    href={siteConfig.buyMeACoffee}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                />
                                            ),
                                            strong: <strong />,
                                        }}
                                    />
                                </p>
                            ))}
                        </section>
                    ))}
                </div>
                <footer className="document-footer">
                    {t('footer')}
                </footer>

                <p className="document-actions">
                    <a className="button secondary" href={routeFor(language, 'home')}>
                        ←{t('actions.back')}
                    </a>
                </p>
            </article>
        </>
    );
}
