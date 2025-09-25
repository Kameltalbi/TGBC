import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-20T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-title">
        <h3>Site en ligne dans :</h3>
        <h3>Website goes live in:</h3>
      </div>
      <div className="countdown-timer">
        <div className="time-unit">
          <div className="time-value">{timeLeft.days}</div>
          <div className="time-label">Jours / Days</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.hours}</div>
          <div className="time-label">Heures / Hours</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.minutes}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.seconds}</div>
          <div className="time-label">Secondes / Seconds</div>
        </div>
      </div>
      <div className="launch-date">
        <p>Lancement prévu le 20 octobre 2025</p>
        <p>Expected launch: October 20, 2025</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
