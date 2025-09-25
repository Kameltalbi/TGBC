import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/TGBC.jpg" alt="TGBC Logo" className="footer-logo-image" />
              <div className="footer-logo-text">
                <h3>TUNISIAGBC</h3>
                <p>Tunisia Green Building Council</p>
              </div>
            </div>
            <p className="footer-mission">
              Promouvoir la construction durable et l'innovation verte 
              en Tunisie pour un avenir plus respectueux de l'environnement.
            </p>
          </div>

          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul className="footer-links">
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/members">Membres & Partenaires</Link></li>
              <li><Link to="/programs">Programmes & Initiatives</Link></li>
              <li><Link to="/events">Événements</Link></li>
              <li><Link to="/resources">Ressources</Link></li>
              <li><Link to="/news">Actualités</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Coordonnées TGBC</h4>
            <div className="contact-info">
              <p>📧 info@tunisiagbc.org</p>
              <p>📞 +216 XX XXX XXX</p>
              <p>📍 Avenue Habib Bourguiba<br />1000 Tunis, Tunisie</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Réseaux sociaux</h4>
            <SocialMedia />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Tunisia Green Building Council. Tous droits réservés.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Politique de confidentialité</Link>
              <Link to="/terms">Mentions légales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
