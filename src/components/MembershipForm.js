import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MembershipForm.css';

const MembershipForm = ({ onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    membershipType: 'individual',
    address: '',
    city: '',
    country: 'Tunisia',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Créer le contenu de l'email
      const emailContent = `
Nouvelle demande d'adhésion TGBC

Informations personnelles:
- Nom: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Téléphone: ${formData.phone}
- Entreprise: ${formData.company}
- Poste: ${formData.position}

Type d'adhésion: ${formData.membershipType}

Adresse:
- Adresse: ${formData.address}
- Ville: ${formData.city}
- Pays: ${formData.country}

Message additionnel:
${formData.message}

---
Envoyé depuis le site web TGBC
      `;

      // Créer le lien mailto
      const mailtoLink = `mailto:contact@tunisiagbc.org?subject=Nouvelle demande d'adhésion TGBC&body=${encodeURIComponent(emailContent)}`;
      
      // Ouvrir le client email
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="membership-form-modal">
      <div className="form-overlay" onClick={onClose}></div>
      <div className="form-container">
        <div className="form-header">
          <h2>{t('membership.formTitle')}</h2>
          <button className="form-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="membership-form">
          <div className="form-section">
            <h3>{t('membership.personalInfo')}</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">{t('membership.firstName')} *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">{t('membership.lastName')} *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">{t('membership.email')} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t('membership.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">{t('membership.company')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">{t('membership.position')}</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>{t('membership.membershipType')}</h3>
            <div className="form-group">
              <label htmlFor="membershipType">{t('membership.selectType')} *</label>
              <select
                id="membershipType"
                name="membershipType"
                value={formData.membershipType}
                onChange={handleInputChange}
                required
              >
                <option value="individual">{t('membership.individualTitle')} - {t('membership.individualPrice')}</option>
                <option value="company">{t('membership.companyTitle')} - {t('membership.companyPrice')}</option>
                <option value="institution">{t('membership.institutionTitle')} - {t('membership.institutionPrice')}</option>
                <option value="student">{t('membership.studentTitle')} - {t('membership.studentPrice')}</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h3>{t('membership.address')}</h3>
            <div className="form-group">
              <label htmlFor="address">{t('membership.streetAddress')}</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">{t('membership.city')}</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">{t('membership.country')}</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>{t('membership.additionalInfo')}</h3>
            <div className="form-group">
              <label htmlFor="message">{t('membership.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder={t('membership.messagePlaceholder')}
              ></textarea>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="form-success">
              ✅ {t('membership.formSuccess')}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-error">
              ❌ {t('membership.formError')}
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn btn-outline" onClick={onClose}>
              {t('membership.cancel')}
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? t('membership.submitting') : t('membership.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;
