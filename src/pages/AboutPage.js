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
            <h2 className="hero-subtitle">{t('about.heroSubtitle')}</h2>
            <p className="hero-description">
              {t('about.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <h2>{t('about.visionTitle')}</h2>
              <p>
                {t('about.visionText')}
              </p>
            </div>
            <div className="vision-image">
              <img src="/images/about-vision.jpg" alt="Vision TGBC" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>{t('about.missionTitle')}</h2>
              <p>{t('about.missionText')}</p>
            </div>
            <div className="mission-image">
              <img src="/images/about-mission.jpg" alt="Mission TGBC" />
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.objectivesTitle')}</h2>
          </div>
          <div className="objectives-content">
            <ul className="objectives-list">
              {t('about.objectivesList', { returnObjects: true }).map((item, index) => (
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
              <div className="value-icon">🌱</div>
              <h4>{t('about.sustainability')}</h4>
              <p>{t('about.sustainabilityDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>{t('about.innovation')}</h4>
              <p>{t('about.innovationDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>{t('about.collaboration')}</h4>
              <p>{t('about.collaborationDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h4>{t('about.transparency')}</h4>
              <p>{t('about.transparencyDesc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h4>{t('about.responsibility')}</h4>
              <p>{t('about.responsibilityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.teamTitle')}</h2>
          </div>
          <div className="team-content">
            <p>{t('about.teamText')}</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.foundersTitle')}</h2>
          </div>
          <div className="founders-content">
            <p>{t('about.foundersText')}</p>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="network-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.networkTitle')}</h2>
          </div>
          <div className="network-content">
            <p>{t('about.networkText')}</p>
            <ul className="network-list">
              {t('about.networkList', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="downloads-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.downloadsTitle')}</h2>
          </div>
          <div className="downloads-content">
            <ul className="downloads-list">
              {t('about.downloadsList', { returnObjects: true }).map((item, index) => (
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
