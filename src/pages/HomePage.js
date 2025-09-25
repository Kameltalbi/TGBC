import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CountdownTimer from '../components/CountdownTimer';
import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();

  // Chiffres clés avec animation
  const [keyFigures, setKeyFigures] = useState({
    members: 0,
    projects: 0,
    events: 0,
    resources: 0
  });

  const targetFigures = {
    members: 150,
    projects: 25,
    events: 12,
    resources: 45
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setKeyFigures({
          members: Math.floor(targetFigures.members * progress),
          projects: Math.floor(targetFigures.projects * progress),
          events: Math.floor(targetFigures.events * progress),
          resources: Math.floor(targetFigures.resources * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setKeyFigures(targetFigures);
        }
      }, stepDuration);
    };

    // Démarrer l'animation après un délai
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
                  <div className="hero-text">
                    <h1>{t('hero.title')}</h1>
                    <p>
                      {t('hero.subtitle')}
                    </p>
                    <div className="hero-buttons">
                      <a href="/contact" className="btn btn-primary">{t('hero.becomeMember')}</a>
                      <a href="/programs" className="btn btn-primary">{t('hero.discoverPrograms')}</a>
                    </div>
                  </div>
            <div className="hero-image">
              <img 
                src="/images/green building.png" 
                alt="Green Building" 
                className="hero-building-image"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Présentation rapide TGBC */}
      <section className="presentation-section">
        <div className="container">
          <div className="presentation-content">
            <div className="presentation-text">
              <h2>À propos du TGBC</h2>
              <p>
                Le Tunisia Green Building Council est une organisation à but non lucratif 
                dédiée à la promotion de la construction durable en Tunisie. Nous rassemblons 
                les professionnels du secteur pour créer un écosystème vert et innovant.
              </p>
              <a href="/about" className="btn btn-outline">En savoir plus</a>
            </div>
            <div className="presentation-icons">
              <div className="icon-card">
                <div className="icon">💡</div>
                <h3>Innovation</h3>
              </div>
              <div className="icon-card">
                <div className="icon">🌱</div>
                <h3>Durabilité</h3>
              </div>
              <div className="icon-card">
                <div className="icon">🤝</div>
                <h3>Communauté</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="key-figures-section">
        <div className="container">
          <h2>Nos Chiffres Clés</h2>
          <div className="figures-grid">
            <div className="figure-item">
              <div className="figure-number">{keyFigures.members}+</div>
              <div className="figure-label">Membres actifs</div>
            </div>
            <div className="figure-item">
              <div className="figure-number">{keyFigures.projects}</div>
              <div className="figure-label">Projets certifiés</div>
            </div>
            <div className="figure-item">
              <div className="figure-number">{keyFigures.events}</div>
              <div className="figure-label">Événements organisés</div>
            </div>
            <div className="figure-item">
              <div className="figure-number">{keyFigures.resources}</div>
              <div className="figure-label">Ressources disponibles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités & Articles */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>Actualités & Articles</h2>
            <a href="/news" className="btn btn-outline">Voir toutes les actualités</a>
          </div>
          <div className="news-grid">
            <article className="news-card">
              <div className="news-image">
                <div className="placeholder-image">🏢</div>
              </div>
              <div className="news-content">
                <h3>Nouvelle certification LEED en Tunisie</h3>
                <p>Découvrez les premiers projets certifiés LEED dans notre pays...</p>
                <span className="news-date">15 Nov 2024</span>
              </div>
            </article>
            <article className="news-card">
              <div className="news-image">
                <div className="placeholder-image">🌱</div>
              </div>
              <div className="news-content">
                <h3>Formation sur les matériaux durables</h3>
                <p>Une session de formation intensive sur les nouveaux matériaux...</p>
                <span className="news-date">10 Nov 2024</span>
              </div>
            </article>
            <article className="news-card">
              <div className="news-image">
                <div className="placeholder-image">📊</div>
              </div>
              <div className="news-content">
                <h3>Rapport annuel 2024</h3>
                <p>Consultez notre rapport annuel sur l'état de la construction...</p>
                <span className="news-date">5 Nov 2024</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Événements à venir */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>Événements à venir</h2>
            <a href="/events" className="btn btn-outline">Tous les événements</a>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">Nov</span>
              </div>
              <div className="event-content">
                <h3>Conférence sur la construction durable</h3>
                <p>Une journée dédiée aux innovations dans le secteur...</p>
                <a href="/events/conference" className="btn btn-small">S'inscrire</a>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="day">22</span>
                <span className="month">Nov</span>
              </div>
              <div className="event-content">
                <h3>Atelier matériaux écologiques</h3>
                <p>Découvrez les nouveaux matériaux de construction...</p>
                <a href="/events/workshop" className="btn btn-small">S'inscrire</a>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="day">30</span>
                <span className="month">Nov</span>
              </div>
              <div className="event-content">
                <h3>Visite de site certifié</h3>
                <p>Visite guidée d'un bâtiment certifié LEED...</p>
                <a href="/events/visit" className="btn btn-small">S'inscrire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes & Initiatives */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2>Programmes & Initiatives</h2>
            <a href="/programs" className="btn btn-outline">Découvrir nos programmes</a>
          </div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">🏆</div>
              <h3>Certifications</h3>
              <p>Programmes de certification pour les bâtiments verts et les professionnels</p>
            </div>
            <div className="program-card">
              <div className="program-icon">📚</div>
              <h3>Formations</h3>
              <p>Ateliers et formations spécialisées en construction durable</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🔧</div>
              <h3>Outils pratiques</h3>
              <p>Guides et outils pour la mise en œuvre de projets durables</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🚀</div>
              <h3>Projets pilotes</h3>
              <p>Accompagnement de projets innovants et durables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages & Partenaires */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Témoignages & Partenaires</h2>
            <a href="/members" className="btn btn-outline">Rejoindre le réseau</a>
          </div>
          <div className="testimonials-content">
            <div className="testimonials">
              <div className="testimonial">
                <p>"Le TGBC m'a permis de développer mes compétences en construction durable et de rejoindre un réseau professionnel dynamique."</p>
                <span className="author">- Ahmed Ben Ali, Architecte</span>
              </div>
              <div className="testimonial">
                <p>"Grâce aux formations du TGBC, notre entreprise a pu certifier ses premiers projets verts."</p>
                <span className="author">- Fatma Khelil, Directrice Projets</span>
              </div>
            </div>
            <div className="partners-logos">
              <div className="partner-logo">🏢</div>
              <div className="partner-logo">🏗️</div>
              <div className="partner-logo">🌿</div>
              <div className="partner-logo">⚡</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ressources */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>Ressources en accès libre</h2>
            <a href="/resources" className="btn btn-outline">Accéder à toutes nos ressources</a>
          </div>
          <div className="resources-grid">
            <div className="resource-item">
              <div className="resource-icon">📄</div>
              <h3>Rapports</h3>
              <p>Études et rapports sur la construction durable</p>
            </div>
            <div className="resource-item">
              <div className="resource-icon">📖</div>
              <h3>Guides pratiques</h3>
              <p>Manuels et guides pour les professionnels</p>
            </div>
            <div className="resource-item">
              <div className="resource-icon">🎥</div>
              <h3>Vidéos</h3>
              <p>Formations et conférences en ligne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Restez informés sur la construction durable en Tunisie</h2>
              <p>Recevez nos dernières actualités, événements et ressources directement dans votre boîte mail.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Votre adresse email" required />
              <button type="submit" className="btn btn-primary">S'abonner</button>
            </form>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <div className="container">
          <CountdownTimer />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
