import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from '../components/Calendar';
import './EventsPage.css';

const EventsPage = () => {
  const { t } = useTranslation();
  
  // État pour les filtres et la vue du calendrier
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Noms des mois et jours
  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

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

  // Navigation du calendrier
  const goToPreviousMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setCurrentDate(new Date(currentDate.getFullYear() - 1, 11, 1));
    } else {
      setSelectedMonth(selectedMonth - 1);
      setCurrentDate(new Date(currentDate.getFullYear(), selectedMonth - 1, 1));
    }
  };

  const goToNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setCurrentDate(new Date(currentDate.getFullYear() + 1, 0, 1));
    } else {
      setSelectedMonth(selectedMonth + 1);
      setCurrentDate(new Date(currentDate.getFullYear(), selectedMonth + 1, 1));
    }
  };

  // Obtenir le premier jour du mois et le nombre de jours
  const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay();
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getDaysInPreviousMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  };

  // Obtenir les événements pour une date donnée
  const getEventsForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const eventDateString = eventDate.toISOString().split('T')[0];
      return eventDateString === dateString;
    });
  };

  // Générer les jours du calendrier
  const generateCalendarDays = () => {
    const firstDay = getFirstDayOfMonth(currentDate);
    const daysInMonth = getDaysInMonth(currentDate);
    const daysInPrevMonth = getDaysInPreviousMonth(currentDate);
    const days = [];

    // Jours du mois précédent
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day);
      days.push({
        day,
        date,
        isCurrentMonth: false,
        isToday: false,
        events: getEventsForDate(date)
      });
    }

    // Jours du mois actuel
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const today = new Date();
      const isToday = date.toDateString() === today.toDateString();
      
      days.push({
        day,
        date,
        isCurrentMonth: true,
        isToday,
        events: getEventsForDate(date)
      });
    }

    // Jours du mois suivant pour compléter la grille
    const remainingDays = 42 - days.length; // 6 semaines * 7 jours
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
      days.push({
        day,
        date,
        isCurrentMonth: false,
        isToday: false,
        events: getEventsForDate(date)
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  // Gérer le clic sur un événement dans le calendrier
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowCalendar(false);
  };

  // Fermer le calendrier
  const handleCloseCalendar = () => {
    setShowCalendar(false);
  };

  // Gérer le clic sur un événement dans le calendrier intégré
  const onEventClick = (event) => {
    setSelectedEvent(event);
    // Optionnel : ouvrir un modal ou rediriger vers la page de l'événement
    console.log('Event clicked:', event);
  };

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-background">
          <img src="/images/events-hero.jpg" alt="Events Hero" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="events-hero-content">
            <h1>{t('events.heroTitle')}</h1>
            <p className="hero-subtitle">{t('events.heroSubtitle')}</p>
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

          {/* Calendar Layout */}
          <div className="calendar-layout">
            {/* Events List Sidebar */}
            <div className="events-sidebar">
              <div className="events-tabs">
                <button className={`tab-btn ${selectedFilter === 'all' ? 'active' : ''}`}>
                  {t('events.upcomingEvents')}
                </button>
                <button className={`tab-btn ${selectedFilter === 'recent' ? 'active' : ''}`}>
                  {t('events.recentlyAdded')}
                </button>
              </div>
              
              <div className="events-list-sidebar">
                {filteredEvents.map(event => (
                  <div key={event.id} className="event-item-sidebar">
                    <div className="event-date-sidebar">
                      <span className="event-day-number">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div className="event-content-sidebar">
                      <h4 className="event-title-sidebar">{event.title}</h4>
                      <div className="event-meta-sidebar">
                        <span className="event-time-sidebar">
                          {formatTime(event.time)}
                        </span>
                        <span className="event-location-sidebar">
                          {event.location}
                        </span>
                      </div>
                      <div className="event-stats-sidebar">
                        <span className="event-attendees">
                          {Math.floor(Math.random() * 50)} {t('events.going')}
                        </span>
                        <span className="event-spots">
                          {Math.floor(Math.random() * 20)} {t('events.spotsRemaining')}
                        </span>
                      </div>
                    </div>
                    <div className={`event-color-bar ${event.type}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="calendar-grid-main">
              <div className="calendar-header-main">
                <h3>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
                <div className="calendar-controls">
                  <button className="nav-btn-small" onClick={goToPreviousMonth}>
                    ‹
                  </button>
                  <button className="nav-btn-small" onClick={goToNextMonth}>
                    ›
                  </button>
                </div>
              </div>
              
              <div className="calendar-days-header">
                {dayNames.map(day => (
                  <div key={day} className="day-header-main">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="calendar-days-main">
                {calendarDays.map((dayData, index) => (
                  <div
                    key={index}
                    className={`calendar-day-main ${
                      !dayData.isCurrentMonth ? 'other-month' : ''
                    } ${dayData.isToday ? 'today' : ''}`}
                  >
                    <div className="day-number-main">{dayData.day}</div>
                    {dayData.events.length > 0 && (
                      <div className="day-events-main">
                        {dayData.events.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className={`event-bar ${event.type}`}
                            title={event.title}
                            onClick={() => onEventClick(event)}
                          >
                            {event.title.length > 15 
                              ? event.title.substring(0, 15) + '...' 
                              : event.title
                            }
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Year/Month Sidebar */}
            <div className="year-sidebar">
              <div className="year-header">{t('events.year')}</div>
              <div className="months-list">
                {monthNames.map((month, index) => (
                  <div 
                    key={index} 
                    className={`month-item ${index === currentDate.getMonth() ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedMonth(index);
                      setCurrentDate(new Date(currentDate.getFullYear(), index, 1));
                    }}
                  >
                    {month.substring(0, 3).toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
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

      {/* Calendar Modal */}
      {showCalendar && (
        <Calendar
          events={events}
          onEventClick={handleEventClick}
          onClose={handleCloseCalendar}
        />
      )}
    </div>
  );
};

export default EventsPage;
