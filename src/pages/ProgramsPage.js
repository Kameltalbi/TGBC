import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './ProgramsPage.css';

const ProgramsPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [animatedStats, setAnimatedStats] = useState({
    professionals: 0,
    projects: 0,
    programs: 0,
    buildings: 0,
    partnerships: 0
  });

  const targetStats = {
    professionals: 80,
    projects: 25,
    programs: 6,
    buildings: 120,
    partnerships: 15
  };

  const statsRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statType = entry.target.dataset.stat;
            let start = 0;
            const end = targetStats[statType];
            const duration = 2000;
            let startTime = null;

            const animate = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const progress = (currentTime - startTime) / duration;
              const currentValue = Math.min(Math.floor(progress * end), end);
              setAnimatedStats((prev) => ({ ...prev, [statType]: currentValue }));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statsRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      statsRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const programs = t('programs.programsList', { returnObjects: true });
  const filteredPrograms = activeFilter === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-background">
          <img src="/images/green building.png" alt="Bâtiments écologiques" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>{t('programs.heroTitle')}</h1>
            <p className="hero-description">
              {t('programs.heroDescription')}
            </p>
            <a href="#programs" className="btn btn-hero">
              {t('programs.heroCta')}
            </a>
          </div>
        </div>
      </section>

      {/* Program Axes Section */}
      <section className="program-axes-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('programs.axesTitle')}</h2>
            <p>{t('programs.axesDescription')}</p>
          </div>
          <div className="axes-grid">
            {t('programs.axesList', { returnObjects: true }).map((axe, index) => (
              <div key={index} className="axe-card fadeInUp" data-delay={`${index * 0.1}s`}>
                <div className="axe-icon">{axe.icon}</div>
                <h3>{axe.title}</h3>
                <p>{axe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('programs.programsTitle')}</h2>
            <p>{t('programs.programsDescription')}</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="program-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {t('programs.all')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
              onClick={() => setActiveFilter('education')}
            >
              {t('programs.education')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'training' ? 'active' : ''}`}
              onClick={() => setActiveFilter('training')}
            >
              {t('programs.training')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
              onClick={() => setActiveFilter('research')}
            >
              {t('programs.research')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'partnership' ? 'active' : ''}`}
              onClick={() => setActiveFilter('partnership')}
            >
              {t('programs.partnership')}
            </button>
          </div>

          {/* Programs Grid */}
          <div className="programs-grid">
            {filteredPrograms.map((program, index) => (
              <div key={index} className="program-card slideInUp" data-delay={`${index * 0.1}s`}>
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                </div>
                <div className="program-content">
                  <div className="program-category">{program.category}</div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <a href={program.link} className="btn btn-outline">
                    {program.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('programs.impactTitle')}</h2>
            <p>{t('programs.impactDescription')}</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card fadeInScale" data-delay="0.1s">
              <div className="stat-icon">👥</div>
              <div className="stat-number" ref={(el) => (statsRefs.current[0] = el)} data-stat="professionals">
                {animatedStats.professionals}+
              </div>
              <div className="stat-label">{t('programs.professionals')}</div>
            </div>
            <div className="stat-card fadeInScale" data-delay="0.2s">
              <div className="stat-icon">🏗️</div>
              <div className="stat-number" ref={(el) => (statsRefs.current[1] = el)} data-stat="projects">
                {animatedStats.projects}+
              </div>
              <div className="stat-label">{t('programs.projects')}</div>
            </div>
            <div className="stat-card fadeInScale" data-delay="0.3s">
              <div className="stat-icon">🎓</div>
              <div className="stat-number" ref={(el) => (statsRefs.current[2] = el)} data-stat="programs">
                {animatedStats.programs}
              </div>
              <div className="stat-label">{t('programs.activePrograms')}</div>
            </div>
            <div className="stat-card fadeInScale" data-delay="0.4s">
              <div className="stat-icon">🏡</div>
              <div className="stat-number" ref={(el) => (statsRefs.current[3] = el)} data-stat="buildings">
                {animatedStats.buildings}K m²
              </div>
              <div className="stat-label">{t('programs.buildings')}</div>
            </div>
            <div className="stat-card fadeInScale" data-delay="0.5s">
              <div className="stat-icon">🤝</div>
              <div className="stat-number" ref={(el) => (statsRefs.current[4] = el)} data-stat="partnerships">
                {animatedStats.partnerships}+
              </div>
              <div className="stat-label">{t('programs.partnerships')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content bounceIn">
            <h2>{t('programs.ctaTitle')}</h2>
            <p>{t('programs.ctaDescription')}</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                {t('programs.proposeCollaboration')}
              </a>
              <a href="/membership" className="btn btn-outline">
                {t('programs.becomeMember')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('programs.testimonialsTitle')}</h2>
          </div>
          <div className="testimonials-grid">
            {t('programs.testimonialsList', { returnObjects: true }).map((testimonial, index) => (
              <div key={index} className="testimonial-card slideInLeft" data-delay={`${index * 0.2}s`}>
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.position}</span>
                    <span className="company">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('programs.partnersTitle')}</h2>
          </div>
          <div className="partners-grid">
            {t('programs.partnersList', { returnObjects: true }).map((partner, index) => (
              <div key={index} className="partner-logo rotateIn" data-delay={`${index * 0.1}s`}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="links-section">
        <div className="container">
          <div className="links-content">
            <h2>{t('programs.linksTitle')}</h2>
            <p>{t('programs.linksDescription')}</p>
            <div className="links-buttons">
              <a href="/events" className="btn btn-primary">
                {t('programs.viewAgenda')}
              </a>
              <a href="/resources" className="btn btn-outline">
                {t('programs.accessResources')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
