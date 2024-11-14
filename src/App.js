// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import all pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import FacultyPage from './pages/FacultyPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import StudentLifePage from './pages/StudentLifePage';
import CareerPage from './pages/CareerPage';
import AlumniPage from './pages/AlumniPage';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scrolls to top on route change */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/academics" component={AcademicsPage} />
              <Route path="/admissions" component={AdmissionsPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/faculty" component={FacultyPage} />
              <Route path="/gallery" component={GalleryPage} />
              <Route path="/events" component={EventsPage} />
              <Route path="/facilities" component={FacilitiesPage} />
              <Route path="/student-life" component={StudentLifePage} />
              <Route path="/careers" component={CareerPage} />
              <Route path="/alumni" component={AlumniPage} />
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
