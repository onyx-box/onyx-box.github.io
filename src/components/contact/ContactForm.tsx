import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { routeFor } from '@/lib/routes';
import { siteConfig } from '@/content/site/config';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const { t } = useTranslation();
  const language = useLanguage();
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    const form = event.currentTarget;
    const body = new FormData(form);
    const message = String(body.get('message')).trim();
    if (!message) {
      setStatus('error');
      return;
    }
    body.set('message', message);
    setStatus('sending');

    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) {
        setStatus('error');
        return;
      }
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      className="contact-form"
      method="post"
      action={siteConfig.contactEndpoint}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="locale" value={language} />
      <fieldset disabled={status === 'sending'}>
        <label htmlFor="contact-name">{t('contactForm.name')}</label>
        <input id="contact-name" name="name" autoComplete="name" maxLength={100} />

        <label htmlFor="contact-email">{t('contactForm.email')}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
        />

        <label htmlFor="contact-message">{t('contactForm.message')}</label>
        <textarea id="contact-message" name="message" rows={5} maxLength={4000} required />

        <div className="contact-form-actions">
          <button className="button primary" type="submit">
            {t(status === 'sending' ? 'contactForm.sending' : 'contactForm.submit')}
          </button>
          <Link to={routeFor(language, 'privacy')}>{t('footer.privacy')}</Link>
        </div>
      </fieldset>
      <div role="status">{status === 'success' && <p>{t('contactForm.success')}</p>}</div>
      <div role="alert">{status === 'error' && <p>{t('contactForm.error')}</p>}</div>
    </form>
  );
}
