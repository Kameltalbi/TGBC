import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './EventsPage.css';

const EventsPage = () => {
  const { t } = useTranslation();
  
  // État pour les filtres et la vue du calendrier
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Événements simulés
  const events = [
    {
      id: 1,
      title: "Forum National du Bâtiment Durable 2025",
      date: "2025-03-14",
      endDate: "2025-03-15",
      time: "09:00",
      location: "Cité des Sciences de Tunis",
      type: "conference",
      category: "Conférence",
      description: "Deux jours de conférences, d'ateliers et d'expositions autour de la construction écologique et de l'efficacité énergétique.",
      organizer: "TGBC",
      featured: true,
      registrationLink: "/contact"
    },
    {
      id: 2,
      title: "Formation LEED Green Associate",
      date: "2025-02-20",
      time: "09:00",
      location: "En ligne",
      type: "training",
      category: "Formation",
      description: "Formation intensive pour obtenir la certification LEED Green Associate.",
      organizer: "TGBC",
      featured: false,
      registrationLink: "/contact"
    },
    {
      id: 3,
      title: "Atelier Matériaux Écologiques",
      date: "2025-02-28",
      time: "14:00",
      location: "Centre de Formation TGBC",
      type: "workshop",
      category: "Atelier",
      description: "Découverte des nouveaux matériaux de construction écologiques et leurs applications.",
      organizer: "TGBC",
      featured: false,
      registrationLink: "/contact"
    },
    {
      id: 4,
      title: "Webinaire Efficacité Énergétique",
      date: "2025-03-05",
      time: "18:00",
      location: "En ligne",
      type: "webinar",
      category: "Webinaire",
      description: "Techniques d'amélioration de l'efficacité énergétique dans les bâtiments existants.",
      organizer: "TGBC",
      featured: false,
      registrationLink: "/contact"
    },
    {
      id: 5,
      title: "Salon International du Bâtiment Vert",
      date: "2025-04-10",
      endDate: "2025-04-12",
      time: "09:00",
      location: "Palais des Expositions de Tunis",
      type: "exhibition",
      category: "Salon",
      description: "Salon professionnel dédié aux innovations et solutions du bâtiment durable.",
      organizer: "TGBC",
      featured: false,
      registrationLink: "/contact"
    }
  ];

  // Filtrer les événements
  const filteredEvents = events.filter(event => {
    if (selectedFilter === 'all') return true;
    return event.type === selectedFilter;
  });

  // Obtenir le prochain événement mis en avant
  const featuredEvent = events.find(event => event.featured);

  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Formater l'heure
  const formatTime = (timeString) => {
    return timeString;
  };

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="events-hero-content">
            <h1>{t('events.heroTitle')}</h1>
            <p className="hero-subtitle">{t('events.heroSubtitle')}</p>
            <a href="#calendar" className="btn btn-hero-primary">
              {t('events.heroCta')}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="featured-event-section">
          <div className="container">
            <div className="featured-event-card">
              <div className="featured-event-content">
                <div className="event-badge">Événement à venir</div>
                <h2>{featuredEvent.title}</h2>
                <div className="event-meta">
                  <div className="event-date">
                    <span className="meta-icon">📅</span>
                    <span>
                      {formatDate(featuredEvent.date)}
                      {featuredEvent.endDate && ` - ${formatDate(featuredEvent.endDate)}`}
                    </span>
                  </div>
                  <div className="event-location">
                    <span className="meta-icon">📍</span>
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
                <p className="event-description">{featuredEvent.description}</p>
                <div className="event-actions">
                  <a href={featuredEvent.registrationLink} className="btn btn-primary">
                    {t('events.register')}
                  </a>
                  <a href="/program" className="btn btn-outline">
                    {t('events.fullProgram')}
                  </a>
                </div>
              </div>
              <div className="featured-event-image">
                <div className="event-image-placeholder">
                  <span className="image-icon">🏢</span>
                  <span>Image de l'événement</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Calendar Section */}
      <section className="calendar-section" id="calendar">
        <div className="container">
          <div className="section-header">
            <h2>{t('events.calendarTitle')}</h2>
            <p className="section-description">
              {t('events.calendarDescription')}
            </p>
          </div>

          {/* Filters */}
          <div className="calendar-filters">
            <div className="filter-group">
              <label>{t('events.filterBy')}:</label>
              <div className="filter-buttons">
                <button 
                  className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('all')}
                >
                  {t('events.all')}
                </button>
                <button 
                  className={`filter-btn ${selectedFilter === 'conference' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('conference')}
                >
                  {t('events.conferences')}
                </button>
                <button 
                  className={`filter-btn ${selectedFilter === 'training' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('training')}
                >
                  {t('events.trainings')}
                </button>
                <button 
                  className={`filter-btn ${selectedFilter === 'workshop' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('workshop')}
                >
                  {t('events.workshops')}
                </button>
                <button 
                  className={`filter-btn ${selectedFilter === 'webinar' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('webinar')}
                >
                  {t('events.webinars')}
                </button>
                <button 
                  className={`filter-btn ${selectedFilter === 'exhibition' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('exhibition')}
                >
                  {t('events.exhibitions')}
                </button>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="events-list">
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-date-info">
                  <div className="event-day">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="event-month">
                    {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                  </div>
                </div>
                <div className="event-content">
                  <div className="event-header">
                    <h3>{event.title}</h3>
                    <span className={`event-type ${event.type}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="event-meta">
                    <div className="event-time">
                      <span className="meta-icon">🕐</span>
                      <span>{formatTime(event.time)}</span>
                    </div>
                    <div className="event-location">
                      <span className="meta-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-footer">
                    <span className="event-organizer">
                      Organisé par {event.organizer}
                    </span>
                    <a href={event.registrationLink} className="btn btn-small">
                      {t('events.register')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="load-more-section">
            <button className="btn btn-outline">
              {t('events.loadMore')}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="events-newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>{t('events.newsletterTitle')}</h2>
            <p>{t('events.newsletterDescription')}</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder={t('events.emailPlaceholder')}
                className="newsletter-input"
              />
              <button className="btn btn-primary">
                {t('events.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
