// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faGraduationCap,
  faUsers,
  faImages,
  faCalendarAlt,
  faBuilding,
  faUserGraduate,
  faBriefcase,
  faPhone,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: faHome },
    { path: '/about', label: 'About', icon: faInfoCircle },
    { path: '/academics', label: 'Academics', icon: faGraduationCap },
    { path: '/admissions', label: 'Admissions', icon: faUserGraduate },
    { path: '/faculty', label: 'Faculty', icon: faUsers },
    { path: '/gallery', label: 'Gallery', icon: faImages },
    { path: '/events', label: 'Events', icon: faCalendarAlt },
    { path: '/facilities', label: 'Facilities', icon: faBuilding },
    { path: '/careers', label: 'Careers', icon: faBriefcase },
    { path: '/contact', label: 'Contact', icon: faPhone }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111111]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <img 
                src="/logo.png" 
                alt="School Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-[#e94560] hidden sm:block">
                Rahul Public School
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200
                  ${location.pathname === item.path
                    ? 'text-[#e94560]'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#e94560] p-2 hover:text-[#ff6b6b] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <nav className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-colors duration-200
                      ${location.pathname === item.path
                        ? 'bg-[#e94560]/20 text-[#e94560]'
                        : 'text-gray-300 hover:bg-[#e94560]/10 hover:text-white'
                      }`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
