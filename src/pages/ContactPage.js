import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faComment,
  faPaperPlane,
  faCheckCircle,
  faSchool,
  faGlobe,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Our Locations",
      color: "from-[#FF6B6B] to-[#FF8E8E]",
      shadowColor: "hover:shadow-[#FF6B6B]/20",
      details: [
        {
          name: "Main Campus",
          address: "123 University Avenue",
          city: "City, State 12345",
          landmark: "Near Central Park",
          coordinates: "12.3456° N, 78.9012° E"
        }
      ]
    },
    {
      icon: faPhone,
      title: "Contact Numbers",
      color: "from-[#4ECDC4] to-[#45B7AF]",
      shadowColor: "hover:shadow-[#4ECDC4]/20",
      details: [
        {
          department: "General Enquiry",
          numbers: ["+91 98765 43210", "+91 98765 43211"],
          timings: "Mon-Fri, 9:00 AM - 5:00 PM"
        }
      ]
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      color: "from-[#FFD93D] to-[#FFC107]",
      shadowColor: "hover:shadow-[#FFD93D]/20",
      details: [
        {
          department: "Admissions",
          email: "admissions@university.edu",
          responseTime: "Within 24 hours"
        }
      ]
    },
    {
      icon: faClock,
      title: "Operating Hours",
      color: "from-[#6C63FF] to-[#5A52D5]",
      shadowColor: "hover:shadow-[#6C63FF]/20",
      details: [
        {
          facility: "Campus Hours",
          hours: [
            "Monday - Friday: 8:00 AM - 8:00 PM",
            "Saturday: 9:00 AM - 1:00 PM",
            "Sunday: Closed"
          ]
        }
      ]
    }
  ];

  const quickLinks = [
    {
      icon: faWhatsapp,
      title: "WhatsApp Support",
      link: "https://wa.me/919876543210",
      description: "Instant chat support",
      color: "from-[#25D366] to-[#128C7E]"
    },
    {
      icon: faGlobe,
      title: "Virtual Tour",
      link: "/virtual-tour",
      description: "Explore our campus",
      color: "from-[#FF6B6B] to-[#FF8E8E]"
    },
    {
      icon: faEnvelope,
      title: "Email Directory",
      link: "/contacts",
      description: "Department contacts",
      color: "from-[#4ECDC4] to-[#45B7AF]"
    }
  ];

  const emergencyContacts = [
    {
      title: "Campus Security",
      number: "+91 98765 43213",
      available: "24/7"
    },
    {
      title: "Medical Emergency",
      number: "+91 98765 43214",
      available: "24/7"
    },
    {
      title: "Fire Emergency",
      number: "+91 98765 43215",
      available: "24/7"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const ContactInfoSection = () => {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Information
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 ${info.shadowColor}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 },
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                {/* Icon Header */}
                <motion.div
                  className={`text-4xl mb-6 bg-gradient-to-br ${info.color} w-16 h-16 rounded-2xl flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FontAwesomeIcon icon={info.icon} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">{info.title}</h3>

                {/* Details */}
                <div className="space-y-4">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="border-t border-slate-700/50 pt-4 first:border-0 first:pt-0">
                      {/* Campus Location Details */}
                      {detail.name && (
                        <>
                          <h4 className="text-[#FF6B6B] font-semibold mb-1">{detail.name}</h4>
                          <p className="text-gray-300 text-sm">{detail.address}</p>
                          <p className="text-gray-300 text-sm">{detail.city}</p>
                          <p className="text-gray-400 text-sm italic">{detail.landmark}</p>
                          {detail.coordinates && (
                            <p className="text-gray-400 text-xs mt-1">{detail.coordinates}</p>
                          )}
                        </>
                      )}

                      {/* Contact Numbers */}
                      {detail.department && (
                        <>
                          <h4 className="text-[#FF6B6B] font-semibold mb-1">{detail.department}</h4>
                          {detail.numbers && detail.numbers.map((number, nIdx) => (
                            <p key={nIdx} className="text-gray-300 text-sm">{number}</p>
                          ))}
                          {detail.timings && (
                            <p className="text-gray-400 text-xs italic mt-1">
                              Available: {detail.timings}
                            </p>
                          )}
                        </>
                      )}

                      {/* Email Details */}
                      {detail.email && (
                        <>
                          <h4 className="text-[#FF6B6B] font-semibold mb-1">{detail.department}</h4>
                          <p className="text-gray-300 text-sm">{detail.email}</p>
                          <p className="text-gray-400 text-xs italic mt-1">
                            Response time: {detail.responseTime}
                          </p>
                        </>
                      )}

                      {/* Operating Hours */}
                      {detail.facility && (
                        <>
                          <h4 className="text-[#FF6B6B] font-semibold mb-1">{detail.facility}</h4>
                          {detail.hours.map((hour, hIdx) => (
                            <p key={hIdx} className="text-gray-300 text-sm">{hour}</p>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] pt-24">
      {/* Hero Section */}
      <motion.section 
        className="text-center py-16 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#e94560] to-[#d63d57] blur-3xl" />
        </motion.div>
        
        <motion.h1 
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#e94560] to-[#d63d57] text-transparent bg-clip-text relative"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We're here to help and answer any questions you might have.
        </motion.p>
      </motion.section>

      {/* Contact Information Grid */}
      <ContactInfoSection />

      {/* Contact Form Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="bg-[#1a1a1a]/50 backdrop-blur-lg rounded-2xl p-10 border border-[#e94560]/20 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#e94560] to-[#d63d57] text-transparent bg-clip-text">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e94560] to-[#d63d57] rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="relative w-full px-6 py-4 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-[#e94560] transition-all"
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e94560] to-[#d63d57] rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="relative w-full px-6 py-4 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-[#e94560] transition-all"
                    onChange={handleChange}
                  />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#e94560] to-[#d63d57] rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="relative w-full px-6 py-4 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-[#e94560] transition-all"
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#e94560] to-[#d63d57] rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="relative w-full px-6 py-4 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-[#e94560] transition-all resize-none"
                  onChange={handleChange}
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#e94560] to-[#d63d57] text-white rounded-lg font-semibold text-lg shadow-lg shadow-[#e94560]/30 hover:shadow-[#e94560]/50 transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(233, 69, 96, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#e94560] to-[#d63d57] text-transparent bg-clip-text">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-8">
            {[
              { icon: faFacebook, link: "#" },
              { icon: faTwitter, link: "#" },
              { icon: faInstagram, link: "#" },
              { icon: faLinkedin, link: "#" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="p-4 bg-slate-800/50 backdrop-blur-lg rounded-2xl text-[#e94560] shadow-lg border border-[#e94560]/20 hover:border-[#e94560]/50 transition-all"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: '0 20px 40px rgba(233, 69, 96, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon icon={social.icon} className="text-2xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Success Message */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#e94560] to-[#d63d57] text-white px-8 py-4 rounded-xl shadow-2xl shadow-[#e94560]/30 flex items-center backdrop-blur-lg"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faCheckCircle} className="text-xl mr-3" />
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPage;