import React from 'react';
import './ContactSocialMedia.css';

const ContactSocialMedia = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://tn.linkedin.com/company/tunisia-green-building-council',
      icon: 'in',
      color: '#0077B5'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/TunisiaGBC',
      icon: 'f',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tunisiagbc/',
      icon: '📷',
      color: '#E4405F'
    }
  ];

  return (
    <div className="contact-social-media">
      <h4>Suivez-nous</h4>
      <div className="contact-social-links">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            style={{ '--social-color': social.color }}
            onClick={() => window.open(social.url, '_blank')}
          >
            <span className="contact-social-icon">
              {social.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSocialMedia;
