import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MembershipForm from '../components/MembershipForm';
import './MembershipPage.css';

const MembershipPage = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  
  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  
  return (
    <div className="membership-page">
      {/* Hero Section */}
      <section className="membership-hero">
        <div className="hero-background">
          <img src="/images/membership-hero.jpg" alt="Membership Hero" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="membership-hero-content">
            <h1>{t('membership.heroTitle')}</h1>
            <p className="hero-subtitle">{t('membership.heroSubtitle')}</p>
            <button onClick={handleOpenForm} className="btn btn-hero-primary">
              {t('membership.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Hero Description Section */}
      <section className="hero-description-section">
        <div className="container">
          <div className="hero-description-content">
            <p className="hero-description">
              {t('membership.heroDescription')}
            </p>
            <div className="hero-details">
              <p>{t('membership.heroDetails')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('membership.whyJoinTitle')}</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>{t('membership.communityTitle')}</h3>
              <p>{t('membership.communityDesc')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>{t('membership.knowledgeTitle')}</h3>
              <p>{t('membership.knowledgeDesc')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>{t('membership.collaborationTitle')}</h3>
              <p>{t('membership.collaborationDesc')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📣</div>
              <h3>{t('membership.visibilityTitle')}</h3>
              <p>{t('membership.visibilityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('membership.categoriesTitle')}</h2>
            <p className="section-description">
              {t('membership.categoriesDesc')}
            </p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-header">
                <h3>{t('membership.individualTitle')}</h3>
                <div className="category-price">{t('membership.individualPrice')}</div>
              </div>
              <div className="category-target">
                <strong>{t('membership.individualTarget')}</strong>
              </div>
              <ul className="category-benefits">
                {t('membership.individualBenefits', { returnObjects: true }).map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button className="btn btn-primary category-btn" onClick={handleOpenForm}>{t('membership.joinNow')}</button>
            </div>
            
            <div className="category-card featured">
              <div className="category-badge">Populaire</div>
              <div className="category-header">
                <h3>{t('membership.companyTitle')}</h3>
                <div className="category-price">{t('membership.companyPrice')}</div>
              </div>
              <div className="category-target">
                <strong>{t('membership.companyTarget')}</strong>
              </div>
              <ul className="category-benefits">
                {t('membership.companyBenefits', { returnObjects: true }).map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button className="btn btn-primary category-btn" onClick={handleOpenForm}>{t('membership.joinNow')}</button>
            </div>
            
            <div className="category-card">
              <div className="category-header">
                <h3>{t('membership.institutionTitle')}</h3>
                <div className="category-price">{t('membership.institutionPrice')}</div>
              </div>
              <div className="category-target">
                <strong>{t('membership.institutionTarget')}</strong>
              </div>
              <ul className="category-benefits">
                {t('membership.institutionBenefits', { returnObjects: true }).map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button className="btn btn-primary category-btn" onClick={handleOpenForm}>{t('membership.joinNow')}</button>
            </div>
            
            <div className="category-card">
              <div className="category-header">
                <h3>{t('membership.studentTitle')}</h3>
                <div className="category-price">{t('membership.studentPrice')}</div>
              </div>
              <div className="category-target">
                <strong>{t('membership.studentTarget')}</strong>
              </div>
              <ul className="category-benefits">
                {t('membership.studentBenefits', { returnObjects: true }).map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button className="btn btn-primary category-btn" onClick={handleOpenForm}>{t('membership.joinNow')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="member-benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('membership.memberBenefitsTitle')}</h2>
          </div>
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon">🎓</div>
              <div className="benefit-content">
                <h4>{t('membership.trainingTitle')}</h4>
                <p>{t('membership.trainingDesc')}</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📰</div>
              <div className="benefit-content">
                <h4>{t('membership.communicationTitle')}</h4>
                <p>{t('membership.communicationDesc')}</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🧩</div>
              <div className="benefit-content">
                <h4>{t('membership.participationTitle')}</h4>
                <p>{t('membership.participationDesc')}</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🧭</div>
              <div className="benefit-content">
                <h4>{t('membership.supportTitle')}</h4>
                <p>{t('membership.supportDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="how-to-join-section" id="join">
        <div className="container">
          <div className="section-header">
            <h2>{t('membership.howToJoinTitle')}</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>{t('membership.step1Title')}</h3>
              <p>{t('membership.step1Desc')}</p>
              <a href="/contact" className="btn btn-outline">
                {t('membership.step1Cta')}
              </a>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>{t('membership.step2Title')}</h3>
              <p>{t('membership.step2Desc')}</p>
              <div className="contact-info">
                <span className="contact-icon">📧</span>
                <span>contact@tgbc.org.tn</span>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>{t('membership.step3Title')}</h3>
              <p>{t('membership.step3Desc')}</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>{t('membership.step4Title')}</h3>
              <p>{t('membership.step4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Space */}
      <section className="member-space-section">
        <div className="container">
          <div className="member-space-content">
            <div className="member-space-text">
              <h2>{t('membership.memberSpaceTitle')}</h2>
              <p>{t('membership.memberSpaceDesc')}</p>
              <a href="/login" className="btn btn-primary">
                {t('membership.memberSpaceCta')}
              </a>
            </div>
            <div className="member-space-features">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <span>{t('membership.resources')}</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📖</div>
                <span>{t('membership.documentation')}</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎥</div>
                <span>{t('membership.webinars')}</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <span>{t('membership.community')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2>{t('membership.finalCtaTitle')}</h2>
            <p>{t('membership.finalCtaDesc')}</p>
            <button onClick={handleOpenForm} className="btn btn-hero-primary">
              {t('membership.finalCtaButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Membership Form Modal */}
      {showForm && (
        <MembershipForm onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default MembershipPage;
