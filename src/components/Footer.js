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
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>contact@tunisiagbc.org</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>+216 71 709 647</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Immeuble Hayet, 2 rue du Lac Loch Ness<br />Mezzanine, App 5, Les Berges du Lac 1053</span>
              </div>
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
