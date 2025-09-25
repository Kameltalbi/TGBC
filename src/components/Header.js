import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const languageMenuRef = useRef(null);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-section" onClick={closeMenu}>
          <img 
            src="/TGBC.jpg" 
            alt="TUNISIAGBC Logo" 
            className="logo-image"
          />
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t('header.tgbc')}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/members" 
                className={`nav-link ${location.pathname === '/members' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t('header.membership')}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/programs" 
                className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t('header.programs')}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/events" 
                className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t('header.agenda')}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/resources" 
                className={`nav-link ${location.pathname === '/resources' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {t('header.resources')}
              </Link>
            </li>
          </ul>
          
          <div className="header-actions">
            <div className="language-switcher" ref={languageMenuRef}>
              <button 
                className="globe-btn"
                onClick={toggleLanguageMenu}
                title="Changer la langue"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/>
                  <path d="M2 12h20" stroke="#2563eb" strokeWidth="2"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#2563eb" strokeWidth="2"/>
                </svg>
              </button>
              {isLanguageMenuOpen && (
                <div className="language-dropdown">
                  <button 
                    className={`lang-option fr ${i18n.language === 'fr' ? 'active' : ''}`}
                    onClick={() => selectLanguage('FR')}
                  >
                    🇫🇷 FR
                  </button>
                  <button 
                    className={`lang-option en ${i18n.language === 'en' ? 'active' : ''}`}
                    onClick={() => selectLanguage('EN')}
                  >
                    🇬🇧 EN
                  </button>
                </div>
              )}
            </div>
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
              {t('header.becomeMember')}
            </Link>
          </div>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
