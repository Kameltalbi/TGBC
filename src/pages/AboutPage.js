import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPage.css';

const AboutPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>{t('about.heroTitle')}</h1>
            <p>
              {t('about.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>{t('about.visionTitle')}</h2>
            <p>
              {t('about.visionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>{t('about.missionTitle')}</h2>
            <p>{t('about.missionText')}</p>
            <ul className="mission-list">
              {t('about.missionList', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.valuesTitle')}</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>{t('about.innovation')}</h4>
              <p>{t('about.innovationDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h4>{t('about.integrity')}</h4>
              <p>{t('about.integrityDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>{t('about.collaboration')}</h4>
              <p>{t('about.collaborationDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h4>{t('about.sustainability')}</h4>
              <p>{t('about.sustainabilityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.historyTitle')}</h2>
          </div>
          <div className="history-content">
            <p>
              {t('about.historyText1')}
            </p>
            <p>
              {t('about.historyText2')}
            </p>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="governance-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.governanceTitle')}</h2>
          </div>
          <div className="governance-content">
            <p>
              {t('about.governanceText1')}
            </p>
            <p>
              {t('about.governanceText2')}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.partnersTitle')}</h2>
          </div>
          <div className="partners-content">
            <p>{t('about.partnersText')}</p>
            <ul className="partners-list">
              {t('about.partnersList', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.contactTitle')}</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{t('about.address')}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>{t('about.email')}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌍</span>
                <span>{t('about.social')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
