import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Calendar.css';

const Calendar = ({ events = [], onEventClick, onClose }) => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [viewMode, setViewMode] = useState('month'); // 'month' ou 'week'

  // Générer les options d'années (5 ans avant et après l'année actuelle)
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      years.push(year);
    }
    return years;
  };

  // Mettre à jour la date courante quand mois/année changent
  React.useEffect(() => {
    setCurrentDate(new Date(selectedYear, selectedMonth, 1));
  }, [selectedMonth, selectedYear]);

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

  // Navigation du calendrier
  const goToPreviousMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    const today = new Date();
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
    setCurrentDate(today);
  };

  // Gestionnaires pour les sélecteurs
  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleViewModeChange = (e) => {
    setViewMode(e.target.value);
  };

  // Obtenir le début de la semaine pour la vue hebdomadaire
  const getWeekStart = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day; // Dimanche = 0
    return new Date(d.setDate(diff));
  };

  // Générer les jours de la semaine pour la vue hebdomadaire
  const generateWeekDays = () => {
    const weekStart = getWeekStart(currentDate);
    const days = [];
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      const today = new Date();
      const isToday = day.toDateString() === today.toDateString();
      
      days.push({
        day: day.getDate(),
        date: day,
        isCurrentMonth: day.getMonth() === currentDate.getMonth(),
        isToday,
        events: getEventsForDate(day)
      });
    }
    
    return days;
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
  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  return (
    <div className="calendar-modal">
      <div className="calendar-overlay" onClick={onClose}></div>
      <div className="calendar-container">
        <div className="calendar-header">
          <h2>{t('events.fullCalendar')}</h2>
          <button className="calendar-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="calendar-nav">
          <button 
            className="nav-btn" 
            onClick={viewMode === 'month' ? goToPreviousMonth : goToPreviousWeek}
          >
            ‹
          </button>
          
          <div className="nav-controls">
            <div className="view-selector">
              <button 
                className={`view-btn ${viewMode === 'month' ? 'active' : ''}`}
                onClick={() => setViewMode('month')}
              >
                {t('events.monthView')}
              </button>
              <button 
                className={`view-btn ${viewMode === 'week' ? 'active' : ''}`}
                onClick={() => setViewMode('week')}
              >
                {t('events.weekView')}
              </button>
            </div>
            
            {viewMode === 'month' && (
              <div className="date-selectors">
                <div className="selector-group">
                  <label htmlFor="month-selector">{t('events.month')}:</label>
                  <select 
                    id="month-selector"
                    value={selectedMonth} 
                    onChange={handleMonthChange}
                    className="month-selector"
                  >
                    {monthNames.map((month, index) => (
                      <option key={index} value={index}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="selector-group">
                  <label htmlFor="year-selector">{t('events.year')}:</label>
                  <select 
                    id="year-selector"
                    value={selectedYear} 
                    onChange={handleYearChange}
                    className="year-selector"
                  >
                    {generateYearOptions().map(year => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            
            {viewMode === 'week' && (
              <div className="week-info">
                <h3>
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
              </div>
            )}
          </div>
          
          <button 
            className="nav-btn" 
            onClick={viewMode === 'month' ? goToNextMonth : goToNextWeek}
          >
            ›
          </button>
        </div>

        <div className="calendar-grid">
          {/* En-têtes des jours */}
          <div className="calendar-day-headers">
            {dayNames.map(day => (
              <div key={day} className="day-header">
                {day}
              </div>
            ))}
          </div>

          {/* Grille des jours */}
          <div className="calendar-days">
            {viewMode === 'month' ? (
              // Vue mensuelle
              calendarDays.map((dayData, index) => (
                <div
                  key={index}
                  className={`calendar-day ${
                    !dayData.isCurrentMonth ? 'other-month' : ''
                  } ${dayData.isToday ? 'today' : ''} ${
                    dayData.events.length > 0 ? 'has-events' : ''
                  }`}
                  onClick={() => {
                    if (dayData.events.length > 0) {
                      setSelectedDate(dayData.date);
                    }
                  }}
                >
                  <div className="day-number">{dayData.day}</div>
                  {dayData.events.length > 0 && (
                    <div className="day-events">
                      {dayData.events.slice(0, 2).map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className={`event-indicator ${event.type}`}
                          title={event.title}
                          onClick={(e) => {
                            e.stopPropagation();
                            onEventClick(event);
                          }}
                        >
                          {event.title.length > 15 
                            ? event.title.substring(0, 15) + '...' 
                            : event.title
                          }
                        </div>
                      ))}
                      {dayData.events.length > 2 && (
                        <div className="more-events">
                          +{dayData.events.length - 2} autres
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              // Vue hebdomadaire
              generateWeekDays().map((dayData, index) => (
                <div
                  key={index}
                  className={`calendar-day week-view ${
                    !dayData.isCurrentMonth ? 'other-month' : ''
                  } ${dayData.isToday ? 'today' : ''} ${
                    dayData.events.length > 0 ? 'has-events' : ''
                  }`}
                  onClick={() => {
                    if (dayData.events.length > 0) {
                      setSelectedDate(dayData.date);
                    }
                  }}
                >
                  <div className="day-number">{dayData.day}</div>
                  <div className="day-events">
                    {dayData.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`event-indicator ${event.type}`}
                        title={event.title}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick(event);
                        }}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="calendar-footer">
          <button className="btn btn-outline" onClick={goToToday}>
            {t('events.today')}
          </button>
          <div className="event-legend">
            <div className="legend-item">
              <span className="legend-color conference"></span>
              <span>{t('events.conferences')}</span>
            </div>
            <div className="legend-item">
              <span className="legend-color training"></span>
              <span>{t('events.trainings')}</span>
            </div>
            <div className="legend-item">
              <span className="legend-color workshop"></span>
              <span>{t('events.workshops')}</span>
            </div>
            <div className="legend-item">
              <span className="legend-color webinar"></span>
              <span>{t('events.webinars')}</span>
            </div>
            <div className="legend-item">
              <span className="legend-color exhibition"></span>
              <span>{t('events.exhibitions')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
