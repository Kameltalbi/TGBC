import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();

  // Slides du hero
  const heroSlides = [
    {
      id: 1,
      title: "Construire aujourd'hui, penser demain.",
      subtitle: "Le Tunisia Green Building Council œuvre pour un avenir durable à travers la promotion de la construction écologique en Tunisie.",
      image: "/images/hero-slide-1.jpg",
      cta1: "Découvrir nos programmes",
      cta2: "Devenir membre"
    },
    {
      id: 2,
      title: "Innovation & Durabilité",
      subtitle: "Nous développons des solutions innovantes pour transformer l'environnement bâti tunisien vers plus de durabilité.",
      image: "/images/hero-slide-2.jpg",
      cta1: "Nos innovations",
      cta2: "Rejoindre le réseau"
    },
    {
      id: 3,
      title: "Formation & Certification",
      subtitle: "Renforcez vos compétences avec nos programmes de formation spécialisés en construction durable.",
      image: "/images/hero-slide-3.jpg",
      cta1: "Voir les formations",
      cta2: "S'inscrire"
    },
    {
      id: 4,
      title: "Partenariat & Collaboration",
      subtitle: "Rejoignez notre réseau d'acteurs engagés pour construire ensemble l'avenir durable de la Tunisie.",
      image: "/images/hero-slide-4.jpg",
      cta1: "Nos partenaires",
      cta2: "Devenir partenaire"
    }
  ];

  // Chiffres clés animés
  const [keyFigures, setKeyFigures] = useState({
    professionals: 0,
    projects: 0,
    partners: 0,
    emissions: 0
  });

  const targetFigures = {
    professionals: 120,
    projects: 45,
    partners: 20,
    emissions: 2800
  };

  // Auto-slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Animation des chiffres
  useEffect(() => {
    const animateNumbers = () => {
      Object.keys(targetFigures).forEach((key, index) => {
        setTimeout(() => {
          let current = 0;
          const increment = targetFigures[key] / 60;
          const timer = setInterval(() => {
            current += increment;
            if (current >= targetFigures[key]) {
              setKeyFigures(prev => ({ ...prev, [key]: targetFigures[key] }));
              clearInterval(timer);
            } else {
              setKeyFigures(prev => ({ ...prev, [key]: Math.floor(current) }));
            }
          }, 30);
        }, index * 200);
      });
    };

    const timer = setTimeout(animateNumbers, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer pour les animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="hero-image">
                <img src={slide.image} alt={slide.title} />
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content">
                <div className="container">
                  <div className="hero-text">
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <div className="hero-buttons">
                      <a href="/programs" className="btn btn-primary">
                        {slide.cta1}
                      </a>
                      <a href="/membership" className="btn btn-secondary">
                        {slide.cta2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hero-navigation">
          <button
            className="nav-btn prev"
            onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
          >
            ‹
          </button>
          <button
            className="nav-btn next"
            onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
          >
            ›
          </button>
        </div>

        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* 2. À propos du TGBC */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Qui sommes-nous ?</h2>
              <p className="section-description">
                Le TGBC est une organisation à but non lucratif dédiée à la promotion du bâtiment durable. 
                Nous rassemblons les acteurs de la construction, de l'urbanisme et de l'environnement pour 
                bâtir un avenir plus vert en Tunisie.
              </p>
              <a href="/about" className="btn btn-outline">
                En savoir plus
              </a>
            </div>
            <div className="about-image">
              <img src="/images/green building.png" alt="Bâtiment vert tunisien" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nos programmes phares */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos programmes phares</h2>
            <p className="section-subtitle">
              Découvrez nos initiatives principales pour un bâtiment durable en Tunisie
            </p>
          </div>
          <div className="programs-marquee">
            <div className="programs-track">
              <div className="program-card">
                <div className="program-icon">📚</div>
                <h3>Formation & Certification</h3>
                <p>Renforcer les compétences des professionnels du secteur de la construction durable.</p>
                <a href="/programs" className="program-link">Découvrir le programme</a>
              </div>
              <div className="program-card">
                <div className="program-icon">🏙️</div>
                <h3>Green Cities Tunisia</h3>
                <p>Accompagner les villes tunisiennes vers un développement urbain plus durable.</p>
                <a href="/programs" className="program-link">Découvrir le programme</a>
              </div>
              <div className="program-card">
                <div className="program-icon">💡</div>
                <h3>Innovation & Recherche</h3>
                <p>Promouvoir les technologies vertes et les solutions innovantes pour le bâtiment.</p>
                <a href="/programs" className="program-link">Découvrir le programme</a>
              </div>
              <div className="program-card">
                <div className="program-icon">🌍</div>
                <h3>Sensibilisation & Plaidoyer</h3>
                <p>Encourager la transition écologique à travers l'éducation et le plaidoyer.</p>
                <a href="/programs" className="program-link">Découvrir le programme</a>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="program-card">
                <div className="program-icon">📚</div>
                <h3>Formation & Certification</h3>
                <p>Renforcer les compétences des professionnels du secteur de la construction durable.</p>
                <a href="/programs" className="program-link">Découvrir le programme</a>
              </div>
              <div className="program-card">
                <div className="program-icon">🏙️</div>
                <h3>Green Cities Tunisia</h3>
                <p>Accompagner les villes tunisiennes vers un développement urbain plus durable.</p>
                <a href="/programs" className="program-link">Découvrir le programme</a>
              </div>
              <div className="program-card">
                <div className="program-icon">💡</div>
                <h3>Innovation & Recherche</h3>
                <p>Promouvoir les technologies vertes et les solutions innovantes pour le bâtiment.</p>
                <a href="/programs" className="program-link">Découvrir le programme</a>
              </div>
              <div className="program-card">
                <div className="program-icon">🌍</div>
                <h3>Sensibilisation & Plaidoyer</h3>
                <p>Encourager la transition écologique à travers l'éducation et le plaidoyer.</p>
                <a href="/programs" className="program-link">Découvrir le programme</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projets & Réalisations */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projets & Réalisations</h2>
            <p className="section-subtitle">
              Découvrez nos réalisations concrètes et nos projets inspirants
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-item">
              <div className="project-image">
                <img src="/images/programs-hero.jpg" alt="Projet 1" />
              </div>
              <div className="project-content">
                <h3>Bâtiment certifié LEED</h3>
                <p>Tunis, Tunisie</p>
                <a href="#" className="project-link">Voir plus</a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/images/programs-section-1.jpg" alt="Projet 2" />
              </div>
              <div className="project-content">
                <h3>Centre de formation durable</h3>
                <p>Sousse, Tunisie</p>
                <a href="#" className="project-link">Voir plus</a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/images/programs-section-2.jpg" alt="Projet 3" />
              </div>
              <div className="project-content">
                <h3>Quartier écologique</h3>
                <p>Monastir, Tunisie</p>
                <a href="#" className="project-link">Voir plus</a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/images/hero-slide-1.jpg" alt="Projet 4" />
              </div>
              <div className="project-content">
                <h3>Rénovation énergétique</h3>
                <p>Bizerte, Tunisie</p>
                <a href="#" className="project-link">Voir plus</a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/images/hero-slide-2.jpg" alt="Projet 5" />
              </div>
              <div className="project-content">
                <h3>École verte</h3>
                <p>Kairouan, Tunisie</p>
                <a href="#" className="project-link">Voir plus</a>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src="/images/hero-slide-3.jpg" alt="Projet 6" />
              </div>
              <div className="project-content">
                <h3>Hôpital durable</h3>
                <p>Sfax, Tunisie</p>
                <a href="#" className="project-link">Voir plus</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Nos événements à venir */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos événements à venir</h2>
            <p className="section-subtitle">
              Rejoignez-nous pour nos prochains événements et formations
            </p>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="day">15</span>
                <span className="month">MAR</span>
              </div>
              <div className="event-content">
                <h3>Forum du Bâtiment Durable 2025</h3>
                <p>Tunis, Tunisie</p>
                <a href="/events" className="event-link">S'inscrire</a>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="day">22</span>
                <span className="month">MAR</span>
              </div>
              <div className="event-content">
                <h3>Atelier Matériaux Écologiques</h3>
                <p>Sousse, Tunisie</p>
                <a href="/events" className="event-link">S'inscrire</a>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="day">05</span>
                <span className="month">AVR</span>
              </div>
              <div className="event-content">
                <h3>Formation Bâtiments Zéro Énergie</h3>
                <p>Monastir, Tunisie</p>
                <a href="/events" className="event-link">S'inscrire</a>
              </div>
            </div>
          </div>
          <div className="events-cta">
            <a href="/events" className="btn btn-outline">Voir tout l'agenda</a>
          </div>
        </div>
      </section>

      {/* 6. Adhésion au TGBC */}
      <section className="membership-section">
        <div className="container">
          <div className="membership-content">
            <div className="membership-text">
              <h2 className="section-title">Rejoignez le mouvement du bâtiment durable</h2>
              <p className="section-description">
                En devenant membre du TGBC, vous bénéficiez de ressources exclusives, de formations, 
                et d'un réseau d'acteurs engagés pour construire ensemble un avenir plus vert.
              </p>
              <a href="/membership" className="btn btn-primary">Devenir membre</a>
            </div>
            <div className="membership-image">
              <img src="/images/hero-slide-4.jpg" alt="Atelier TGBC" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Nos impacts en chiffres */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos impacts en chiffres</h2>
            <p className="section-subtitle">
              Des résultats concrets qui témoignent de notre engagement
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-icon">🧑‍🎓</div>
              <div className="impact-number">{keyFigures.professionals}+</div>
              <div className="impact-label">Professionnels formés</div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🏗️</div>
              <div className="impact-number">{keyFigures.projects}</div>
              <div className="impact-label">Projets accompagnés</div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🏙️</div>
              <div className="impact-number">{keyFigures.partners}</div>
              <div className="impact-label">Partenaires institutionnels</div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🌍</div>
              <div className="impact-number">{keyFigures.emissions}</div>
              <div className="impact-label">Émissions évitées (tCO₂e)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Partenaires & Soutiens */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Partenaires & Soutiens</h2>
            <p className="section-subtitle">
              Nos collaborations pour un impact plus fort
            </p>
          </div>
          <div className="partners-slider">
            <div className="partners-track">
              <div className="partner-logo">BERD</div>
              <div className="partner-logo">IFC</div>
              <div className="partner-logo">GIZ</div>
              <div className="partner-logo">Ministère Environnement</div>
              <div className="partner-logo">Université Tunis</div>
              <div className="partner-logo">ANME</div>
              <div className="partner-logo">CNUD</div>
              <div className="partner-logo">ONAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Actualités & Ressources */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Actualités & Ressources</h2>
            <p className="section-subtitle">
              Restez informé de nos dernières activités et ressources
            </p>
          </div>
          <div className="news-grid">
            <div className="news-item">
              <div className="news-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center" alt="Bâtiment vert certifié LEED" />
              </div>
              <div className="news-content">
                <span className="news-category">Actualité</span>
                <h3>Nouvelle certification LEED en Tunisie</h3>
                <p>Découvrez les premiers projets certifiés LEED dans notre pays...</p>
                <a href="/news" className="news-link">Lire la suite</a>
              </div>
            </div>
            <div className="news-item">
              <div className="news-image">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&crop=center" alt="Formation construction durable" />
              </div>
              <div className="news-content">
                <span className="news-category">Formation</span>
                <h3>Formation sur les matériaux durables</h3>
                <p>Une session de formation intensive sur les nouveaux matériaux...</p>
                <a href="/news" className="news-link">Lire la suite</a>
              </div>
            </div>
            <div className="news-item">
              <div className="news-image">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center" alt="Architecture durable moderne" />
              </div>
              <div className="news-content">
                <span className="news-category">Rapport</span>
                <h3>Rapport annuel 2024</h3>
                <p>Consultez notre rapport annuel sur l'état de la construction...</p>
                <a href="/news" className="news-link">Lire la suite</a>
              </div>
            </div>
          </div>
          <div className="news-cta">
            <a href="/news" className="btn btn-outline">Voir toutes les actualités</a>
          </div>
        </div>
      </section>

      {/* 10. Section finale CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2>Ensemble, faisons du bâtiment durable une réalité</h2>
            <p>
              🌿 Rejoignez le TGBC, participez à nos formations et construisez un avenir plus vert.
            </p>
            <div className="final-cta-buttons">
              <a href="/membership" className="btn btn-primary">Devenir membre</a>
              <a href="/contact" className="btn btn-secondary">S'abonner à la newsletter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;