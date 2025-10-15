import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MembershipPage from './pages/MembershipPage';
import EventsPage from './pages/EventsPage';
import NewsPage from './pages/NewsPage';
import ProgramsPage from './pages/ProgramsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
