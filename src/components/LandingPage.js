import React from 'react';
import CountdownTimer from './CountdownTimer';
import SocialMedia from './SocialMedia';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1">🏢</div>
          <div className="shape shape-2">🌱</div>
          <div className="shape shape-3">♻️</div>
          <div className="shape shape-4">🌿</div>
          <div className="shape shape-5">🏗️</div>
          <div className="shape shape-6">🌍</div>
        </div>
      </div>
      
      <div className="content">
        <div className="logo-section">
          <div className="logo">
            <img 
              src="/TGBC.jpg" 
              alt="TUNISIAGBC Logo" 
              className="logo-image"
            />
            <h1>TGBC</h1>
            <div className="logo-subtitle">
              <span>Tunisia Green Building Council</span>
            </div>
          </div>
        </div>

        <div className="main-message">
          <div className="construction-notice">
            <h2>🚧 Site en Construction 🚧</h2>
            <h2>🚧 Website Under Construction 🚧</h2>
          </div>
          
          <div className="description">
            <p>
              Nous travaillons actuellement sur notre nouveau site web pour vous offrir 
              une expérience exceptionnelle. Revenez bientôt pour découvrir nos services 
              et initiatives en matière de construction verte et durable en Tunisie.
            </p>
            <p>
              We are currently working on our new website to provide you with an 
              exceptional experience. Come back soon to discover our services and 
              green building and sustainable construction initiatives in Tunisia.
            </p>
          </div>
        </div>

        <CountdownTimer />

        <div className="contact-info">
          <h3>Restez connecté / Stay Connected</h3>
          <p>
            Suivez-nous sur nos réseaux sociaux pour les dernières actualités 
            et mises à jour sur le développement durable et la construction verte en Tunisie.
          </p>
          <p>
            Follow us on social media for the latest news and updates on 
            sustainable development and green building in Tunisia.
          </p>
        </div>

        <SocialMedia />
      </div>
    </div>
  );
};

export default LandingPage;
