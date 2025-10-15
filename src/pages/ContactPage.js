import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section - Dark Background */}
        <div className="contact-left">
          <div className="contact-left-content">
            <h1 className="contact-main-title">
              Nous aimerions avoir de vos nouvelles
            </h1>
            <div className="decorative-circles">
              <div className="circle circle-solid"></div>
              <div className="circle circle-dashed"></div>
              <div className="circle circle-solid"></div>
            </div>
          </div>
          <div className="contact-footer-left">
            <div className="footer-logo">
              <div className="logo-circles">
                <div className="logo-circle"></div>
                <div className="logo-circle"></div>
                <div className="logo-circle"></div>
              </div>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Politique de confidentialité</a>
              <a href="#" className="footer-link">Déclaration moderne</a>
              <a href="#" className="footer-link">Déclaration d'impact social</a>
            </div>
          </div>
        </div>

        {/* Right Section - Light Background */}
        <div className="contact-right">
          <div className="contact-right-content">
            <h2 className="contact-form-title">Contactez-nous</h2>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Votre message a été envoyé avec succès !
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">PRÉNOM</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Entrez votre prénom"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">NOM</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Entrez votre nom"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Entrez votre email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">TÉLÉPHONE</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Entrez votre numéro de téléphone"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Entrez votre message"
                  rows="4"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer →'}
              </button>
            </form>

            <div className="email-section">
              <h3 className="email-title">ÉCRIVEZ-NOUS</h3>
              <a href="mailto:contact@tunisiagbc.org" className="email-link">
                contact@tunisiagbc.org
              </a>
            </div>
          </div>

          <div className="contact-footer-right">
            <a href="mailto:contact@tunisiagbc.org" className="footer-email">
              contact@tunisiagbc.org
            </a>
            <div className="social-links">
              <a href="https://www.facebook.com/TunisiaGBC" className="social-link">Facebook</a>
              <a href="https://tn.linkedin.com/company/tunisia-green-building-council" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
