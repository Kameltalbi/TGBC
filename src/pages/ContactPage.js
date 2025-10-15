import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section - Contact Info */}
        <div className="contact-left">
          <div className="contact-left-content">
            <h1 className="contact-main-title">
              {t('contact.mainTitle')}
            </h1>
            <p className="contact-subtitle">
              {t('contact.subtitleLeft')}
            </p>
            
            <div className="contact-info">
              <div className="info-item">
                <h3 className="info-label">{t('contact.phone')}</h3>
                <p className="info-value">+216 71 709 647</p>
              </div>
              
              <div className="info-item">
                <h3 className="info-label">{t('contact.email')}</h3>
                <p className="info-value">contact@tunisiagbc.org</p>
              </div>
              
              <div className="info-item">
                <h3 className="info-label">{t('contact.office')}</h3>
                <p className="info-value">
                  Immeuble Hayet, 2 rue du Lac Loch Ness<br />
                  Mezzanine, App 5<br />
                  Les Berges du Lac 1053
                </p>
                <a href="https://maps.google.com" className="map-link">
                  {t('contact.seeOnMap')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-right">
          <div className="contact-right-content">
            <p className="form-intro">
              {t('contact.formIntro')}
            </p>
            
            <h2 className="contact-form-title">{t('contact.formTitle')}</h2>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Votre message a été envoyé avec succès !
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.name')}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.email')}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.phonePlaceholder')}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('contact.subject')}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.message')}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi...' : t('contact.sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
