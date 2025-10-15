import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactSocialMedia from '../components/ContactSocialMedia';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    membership: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        membership: false
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>{t('contact.title')}</h1>
            <p>
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h3>{t('contact.form.title')}</h3>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.form.name')} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('contact.form.email')} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">{t('contact.form.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">{t('contact.form.company')}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t('contact.form.subject')} *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="membership">Adhésion</option>
                    <option value="certification">Certification</option>
                    <option value="formation">Formation</option>
                    <option value="partnership">Partenariat</option>
                    <option value="event">Événement</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre demande ou question..."
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="membership"
                      checked={formData.membership}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    Je souhaite recevoir des informations sur l'adhésion au TUNISIAGBC
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : t('contact.form.send')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h3>{t('contact.info.title')}</h3>

              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h5>{t('contact.info.address')}</h5>
                    <p>{t('contact.info.addressValue')}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h5>{t('contact.info.phone')}</h5>
                    <p>{t('contact.info.phoneValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
