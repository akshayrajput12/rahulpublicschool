// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone, faGraduationCap, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const pulseVariants = {
    hover: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.4,
        repeat: Infinity,
      }
    }
  };

  const glowVariants = {
    hover: {
      boxShadow: [
        '0 0 0 0 rgba(233, 69, 96, 0)',
        '0 0 20px 10px rgba(233, 69, 96, 0.3)',
        '0 0 0 0 rgba(233, 69, 96, 0)'
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      }
    }
  };

  const lightningVariants = {
    hover: {
      filter: [
        'brightness(1)',
        'brightness(1.5)',
        'brightness(1)',
      ],
      transition: {
        duration: 0.2,
        repeat: 1,
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              className="relative w-48 h-48 rounded-full overflow-hidden bg-white/5"
              whileHover={["hover", "glow"]}
            >
              <motion.img
                src="/logo.png"
                alt="School Logo"
                className="w-full h-full object-cover relative z-10 p-2"
                variants={pulseVariants}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                variants={glowVariants}
              />
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering minds, shaping futures. Your journey to excellence begins here.
              We are committed to providing quality education and fostering innovation.
            </p>

            {/* Social Icons */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: faFacebook, color: '#4267B2' },
                { icon: faTwitter, color: '#1DA1F2' },
                { icon: faInstagram, color: '#E1306C' },
                { icon: faLinkedin, color: '#0077B5' },
                { icon: faGithub, color: '#ffffff' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="relative hover:scale-110 transition-transform"
                  whileHover={["hover", "lightning"]}
                  variants={lightningVariants}
                >
                  <FontAwesomeIcon 
                    icon={social.icon} 
                    className="text-2xl relative z-10"
                    style={{ color: '#e94560' }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#e94560]/10 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ 
                      scale: 1.5,
                      opacity: [0, 0.2, 0],
                      transition: { duration: 0.5, repeat: Infinity }
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold mb-6 relative text-[#e94560]">
              Quick Links
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#e94560]"
                initial={{ width: 0 }}
                whileInView={{ width: '2rem' }}
                viewport={{ once: true }}
              />
            </h4>
            {[
              'Home', 'About Us', 'Courses', 'Admissions', 
              'Faculty', 'Research', 'Campus Life', 'Contact'
            ].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="block text-gray-300 hover:text-[#e94560] transition-colors relative group"
                whileHover={{ x: 5 }}
              >
                <span className="relative z-10">{link}</span>
                <motion.div
                  className="absolute inset-0 bg-[#e94560]/10 rounded"
                  initial={{ scaleX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    transition: { duration: 0.3 }
                  }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold mb-6 relative text-[#e94560]">
              Contact Us
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#e94560]"
                initial={{ width: 0 }}
                whileInView={{ width: '2rem' }}
                viewport={{ once: true }}
              />
            </h4>
            {[
              { icon: faMapMarkerAlt, text: '123 Education Ave, Knowledge City, ST 12345' },
              { icon: faPhone, text: '+1 (234) 567-8901' },
              { icon: faEnvelope, text: 'info@yourdomain.com' },
              { icon: faGraduationCap, text: 'Admissions: +1 (234) 567-8902' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <FontAwesomeIcon icon={item.icon} className="text-[#e94560]" />
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold mb-6 relative text-[#e94560]">
              Newsletter
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-[#e94560]"
                initial={{ width: 0 }}
                whileInView={{ width: '2rem' }}
                viewport={{ once: true }}
              />
            </h4>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[#1f1f1f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e94560] text-gray-300"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                className="w-full px-4 py-2 bg-[#e94560] rounded-lg font-semibold relative overflow-hidden group"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Subscribe</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ 
                    x: '100%',
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Your Institution. All rights reserved.
            </p>
            <motion.div
              className="flex items-center space-x-2 text-sm text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span>Developed with</span>
              <FontAwesomeIcon icon={faHeart} className="text-[#e94560]" />
              <span>by</span>
              <motion.a
                href="#"
                className="text-[#e94560] font-semibold hover:underline"
                whileHover={{ y: -2 }}
              >
                ADEVV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

