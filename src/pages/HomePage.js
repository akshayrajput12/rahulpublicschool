import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faTrophy,
  faUsers,
  faChalkboardTeacher,
  faBook,
  faGlobe,
  faFlask,
  faPaintBrush,
  faMedal,
  faNewspaper,
  faCalendarAlt,
  faAward,
  faClock,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCalendarCheck,
  faStar,
  faQuoteRight,
  faArrowRight,
  faSchool,
  faUniversity,
  faLaptopCode,
  faMicroscope,
  faMusic,
  faPalette,
  faFutbol,
  faTheaterMasks,
  faCalculator
} from '@fortawesome/free-solid-svg-icons';
import PageTransition from '../components/PageTransition';

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const stats = [
    { icon: faUsers, count: "5000+", label: "Alumni Worldwide", description: "Successful graduates across the globe" },
    { icon: faChalkboardTeacher, count: "200+", label: "Expert Faculty", description: "Highly qualified educators" },
    { icon: faTrophy, count: "100+", label: "Academic Awards", description: "National & international recognition" },
    { icon: faBook, count: "50+", label: "Programs Offered", description: "Diverse learning opportunities" },
    { icon: faAward, count: "95%", label: "Board Results", description: "Consistent academic excellence" },
    { icon: faGlobe, count: "20+", label: "Partner Universities", description: "Global education network" },
    { icon: faFutbol, count: "30+", label: "Sports Activities", description: "Comprehensive physical education" },
    { icon: faStar, count: "25+", label: "Years of Excellence", description: "Legacy of quality education" }
  ];

  const features = [
    {
      icon: faGraduationCap,
      title: "Academic Excellence",
      description: "Consistently achieving 95%+ results in CBSE board examinations with multiple state toppers every year.",
      highlights: [
        "CBSE Curriculum",
        "Small Class Sizes",
        "Personalized Attention",
        "Regular Assessments"
      ]
    },
    {
      icon: faFlask,
      title: "STEM Focus",
      description: "State-of-the-art laboratories and innovative STEM programs fostering scientific thinking."
    },
    {
      icon: faPaintBrush,
      title: "Arts & Culture",
      description: "Comprehensive programs in classical dance, music, and visual arts preserving Indian heritage."
    },
    {
      icon: faGlobe,
      title: "Global Connect",
      description: "International exchange programs with schools in UK, Singapore, and Australia."
    },
    {
      icon: faMedal,
      title: "Leadership Development",
      description: "Structured programs focusing on personality development and leadership skills."
    }
  ];

  const news = [
    {
      title: "Annual Science Exhibition 2024",
      date: "March 15, 2024",
      image: "/images/science-expo.jpg",
      description: "Students showcase innovative projects in robotics and renewable energy.",
      category: "Events",
      icon: faMicroscope
    },
    {
      title: "International Math Olympiad Success",
      date: "February 28, 2024",
      image: "/images/math-olympiad.jpg",
      description: "Our students secured top positions in the International Math Olympiad.",
      category: "Achievements",
      icon: faTrophy
    },
    {
      title: "Cultural Festival 'Harmony 2024'",
      date: "April 5-7, 2024",
      image: "/images/cultural-fest.jpg",
      description: "Annual cultural extravaganza featuring performances, art exhibitions, and more.",
      category: "Events",
      icon: faMusic
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Parent of Class X Student",
      content: "The holistic development approach at Rahul Public School has transformed my daughter into a confident leader. The faculty's dedication and innovative teaching methods have made a significant impact.",
      image: "/images/testimonial1.jpg",
      rating: 5
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Alumni, Batch of 2010",
      content: "My years at RPS laid the foundation for my success at IIT. The school's focus on practical learning and problem-solving skills was invaluable.",
      image: "/images/testimonial2.jpg",
      rating: 5
    }
  ];

  const upcomingEvents = [
    {
      title: "Parent-Teacher Meeting",
      date: "March 20, 2024",
      time: "9:00 AM - 2:00 PM",
      venue: "School Auditorium",
      icon: faCalendarCheck
    },
    {
      title: "Sports Day",
      date: "April 1, 2024",
      time: "8:00 AM - 4:00 PM",
      venue: "School Grounds",
      icon: faFutbol
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#111111]">
        {/* Hero Section - Updated overlay gradient */}
        <motion.section 
          ref={ref}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.div 
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/95" />
            <img 
              src="/images/school-campus.jpg" 
              alt="Rahul Public School Campus" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-10 text-center px-4">
            <motion.h1 
              className="text-7xl md:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Rahul Public School
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering minds through excellence in education since 1990
            </motion.p>
            <motion.div>
              <a 
                href="/admissions" 
                className="bg-[rgb(233,69,96)] text-white px-8 py-3 rounded-full 
                         font-semibold hover:bg-[rgb(213,49,76)] transition-colors"
              >
                Apply Now
              </a>
            </motion.div>
          </div>

          {/* Quick Info Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/80 backdrop-blur-lg py-4"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              <QuickInfoItem icon={faMapMarkerAlt} text="123 Education Lane, City" />
              <QuickInfoItem icon={faPhoneAlt} text="+91 123 456 7890" />
              <QuickInfoItem icon={faEnvelope} text="admissions@rps.edu" />
            </div>
          </motion.div>
        </motion.section>

        {/* Programs Section */}
        <section className="py-20 px-4 bg-[#1a1a1a]/30">
          <div className="container mx-auto">
            <SectionTitle 
              title="Our Programs" 
              subtitle="Comprehensive Education Pathways"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, index) => (
                <ProgramCard 
                  key={index}
                  {...program}
                />
              ))}
            </div>
            
          </div>
        </section>

        {/* Stats Section - Enhanced with animations */}
        <section className="py-20 px-4 bg-[#1a1a1a]/50 backdrop-blur-lg">
          <div className="container mx-auto">
            <SectionTitle 
              title="School at a Glance" 
              subtitle="Our Achievements in Numbers"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <CounterCard 
                  key={index}
                  icon={stat.icon}
                  count={stat.count}
                  label={stat.label}
                  delay={index * 0.1}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Enhanced with hover effects */}
        <section className="py-20 px-4 bg-[#1a1a1a]/50">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center text-[#e94560] mb-16">
              Excellence in Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a]/30 backdrop-blur-md rounded-xl p-8
                           border border-[#e94560]/20 hover:border-[#e94560]/30
                           hover:bg-[#e94560]/10
                           transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className="text-4xl text-[rgb(233,69,96)] mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FontAwesomeIcon icon={feature.icon} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-20 px-4 bg-[#1a1a1a]/30">
          <div className="container mx-auto">
            <SectionTitle 
              title="Latest Updates" 
              subtitle="News, Events & Achievements"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {news.map((item, index) => (
                <NewsCard 
                  key={index}
                  item={item}
                  delay={index * 0.2}
                />
              ))}
            </div>
            <div className="flex justify-center space-x-6">
              <ViewAllButton text="View All News" href="/news" />
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 px-4 bg-[#1a1a1a]/50">
          <div className="container mx-auto">
            <SectionTitle 
              title="Upcoming Events" 
              subtitle="Mark Your Calendar"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {upcomingEvents.map((event, index) => (
                <EventCard 
                  key={index}
                  event={event}
                  delay={index * 0.2}
                />
              ))}
            </div>
            <div className="flex justify-center space-x-6">
              <ViewAllButton text="View All Events" href="/events" />
            </div>
          </div>
        </section>

        {/* Testimonials Section - Enhanced with carousel */}
        <section className="py-20 px-4 bg-[#1a1a1a]/80">
          <div className="container mx-auto">
            <SectionTitle 
              title="Testimonials" 
              subtitle="What Our Community Says"
            />
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Call to Action - Enhanced with multiple options */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CTACard 
                title="Apply for Admission"
                description="Join our next academic session"
                buttonText="Start Application"
                link="/admissions"
                icon={faGraduationCap}
              />
              <CTACard 
                title="Schedule a Visit"
                description="Tour our campus and meet our faculty"
                buttonText="Book a Tour"
                link="/contact"
                icon={faCalendarCheck}
              />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

// Component for section titles
const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2 
      className="text-5xl font-bold text-[#e94560] mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <motion.p 
      className="text-gray-400 text-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      {subtitle}
    </motion.p>
  </div>
);

// Quick Info Item Component
const QuickInfoItem = ({ icon, text }) => (
  <div className="flex items-center justify-center text-gray-300 space-x-2">
    <FontAwesomeIcon icon={icon} />
    <span>{text}</span>
  </div>
);

// Program Card Component
const ProgramCard = ({ icon, title, grades, features }) => (
  <motion.div
    className="bg-[#1a1a1a]/30 backdrop-blur-md rounded-xl p-6 border border-[#e94560]/20
               hover:border-[#e94560]/50 hover:shadow-[0_0_25px_rgba(233,69,96,0.3)]
               group transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="flex justify-between items-start mb-6">
      <motion.div
        className="text-3xl text-[#e94560] group-hover:scale-110 transition-transform duration-300
                   hover:shadow-[0_0_15px_rgba(233,69,96,0.5)]"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={icon} />
      </motion.div>
      <motion.div
        className="text-sm text-[#e94560] bg-[#e94560]/10 px-3 py-1 rounded-full
                   opacity-80 group-hover:opacity-100"
        whileHover={{ scale: 1.05 }}
      >
        {grades}
      </motion.div>
    </div>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#e94560] transition-colors">
      {title}
    </h3>
    <ul className="text-gray-300 space-y-2">
      {features.map((feature, index) => (
        <motion.li 
          key={index} 
          className="flex items-center space-x-2 group/item"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="text-[#e94560] text-sm group-hover/item:translate-x-1 transition-transform" 
          />
          <span className="group-hover/item:text-white transition-colors">{feature}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

// Counter Card Component
const CounterCard = ({ icon, count, label, delay, description }) => (
  <motion.div
    className="text-center p-6 rounded-xl hover:bg-[#1a1a1a]/30 transition-all duration-300
               hover:shadow-[0_0_20px_rgba(233,69,96,0.2)] group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="text-4xl text-[#e94560] mb-4 group-hover:scale-110 transition-transform duration-300"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <FontAwesomeIcon icon={icon} className="filter hover:drop-shadow-[0_0_8px_rgba(233,69,96,0.6)]" />
    </motion.div>
    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#e94560] transition-colors">
      {count}
    </h3>
    <p className="text-gray-400 mb-2 group-hover:text-white transition-colors">{label}</p>
    <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {description}
    </p>
  </motion.div>
);

// News Card Component
const NewsCard = ({ item, delay }) => (
  <motion.div
    className="bg-[#1a1a1a]/30 backdrop-blur-md rounded-xl overflow-hidden
               border border-[#e94560]/20 hover:border-[#e94560]/50
               hover:shadow-[0_0_25px_rgba(233,69,96,0.2)]
               group transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
  >
    <div className="relative overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex items-center space-x-2 text-[#e94560] mb-2">
        <FontAwesomeIcon 
          icon={item.icon} 
          className="group-hover:rotate-12 transition-transform duration-300" 
        />
        <span className="text-sm font-medium">{item.category}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e94560] transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
        {item.description}
      </p>
      <p className="text-gray-500 flex items-center space-x-2">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span>{item.date}</span>
      </p>
    </div>
  </motion.div>
);

// Event Card Component
const EventCard = ({ event, delay }) => (
  <motion.div
    className="bg-[#1a1a1a]/30 backdrop-blur-md rounded-xl p-6 
               border border-[#e94560]/20 hover:border-[#e94560]/50
               hover:shadow-[0_0_25px_rgba(233,69,96,0.2)]
               group transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-[#e94560]/10 rounded-full
                    group-hover:bg-[#e94560]/20 transition-colors">
        <FontAwesomeIcon 
          icon={event.icon} 
          className="text-3xl text-[#e94560] group-hover:scale-110 transition-transform" 
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white group-hover:text-[#e94560] transition-colors">
          {event.title}
        </h3>
        <div className="space-y-1 mt-2">
          <p className="text-gray-400 flex items-center space-x-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-[#e94560]" />
            <span>{event.date}</span>
          </p>
          <p className="text-gray-400 flex items-center space-x-2">
            <FontAwesomeIcon icon={faClock} className="text-[#e94560]" />
            <span>{event.time}</span>
          </p>
          <p className="text-gray-400 flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#e94560]" />
            <span>{event.venue}</span>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Testimonials Carousel Component
const TestimonialsCarousel = ({ testimonials }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={index}
        className="bg-[#1a1a1a]/30 backdrop-blur-md rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      >
        <div className="flex items-center space-x-4 mb-4">
          <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
          <div>
            <h4 className="text-white font-bold">{testimonial.name}</h4>
            <p className="text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
        <div className="flex text-[#e94560]">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} />
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

// CTA Card Component
const CTACard = ({ title, description, buttonText, link, icon }) => (
  <motion.div
    className="bg-[#1a1a1a]/30 backdrop-blur-md rounded-xl p-8 border border-[#e94560]/20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <FontAwesomeIcon icon={icon} className="text-4xl text-[#e94560] mb-4" />
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <a
      href={link}
      className="inline-flex items-center space-x-2 bg-[#e94560] text-white px-6 py-2 rounded-full
                hover:bg-[rgb(213,49,76)] transition-colors"
    >
      <span>{buttonText}</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </motion.div>
);

// View All Button Component
const ViewAllButton = ({ text, href }) => (
  <motion.a
    href={href}
    className="inline-flex items-center space-x-2 px-8 py-3 rounded-full
               bg-gradient-to-r from-[#e94560] to-[#ff6b6b]
               hover:from-[#ff6b6b] hover:to-[#e94560]
               text-white font-medium
               shadow-[0_0_15px_rgba(233,69,96,0.3)]
               hover:shadow-[0_0_20px_rgba(233,69,96,0.5)]
               transition-all duration-300
               group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>{text}</span>
    <FontAwesomeIcon 
      icon={faArrowRight} 
      className="transform group-hover:translate-x-1 transition-transform" 
    />
  </motion.a>
);

// Programs Data
const programs = [
  {
    icon: faSchool,
    title: "Primary Wing",
    grades: "Grades 1-5",
    features: [
      "Foundation Building",
      "Activity-Based Learning",
      "Phonics & Language",
      "Basic Mathematics",
      "Environmental Studies",
      "Creative Arts & Crafts"
    ]
  },
  {
    icon: faUniversity,
    title: "Middle School",
    grades: "Grades 6-8",
    features: [
      "Subject Specialization",
      "Life Skills Development",
      "Scientific Thinking",
      "Digital Literacy",
      "Sports & Fitness",
      "Language Proficiency"
    ]
  },
  {
    icon: faLaptopCode,
    title: "Secondary Wing",
    grades: "Grades 9-10",
    features: [
      "Advanced Sciences",
      "Computer Programming",
      "Career Counseling",
      "Research Projects",
      "Leadership Programs",
      "Competitive Exams"
    ]
  },
  {
    icon: faMicroscope,
    title: "Senior Secondary",
    grades: "Grades 11-12 (Science)",
    features: [
      "Physics & Chemistry",
      "Biology/Mathematics",
      "Computer Science",
      "JEE/NEET Preparation",
      "Practical Labs",
      "Research Projects"
    ]
  },
  {
    icon: faCalculator,
    title: "Commerce Stream",
    grades: "Grades 11-12",
    features: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics",
      "Financial Literacy",
      "Entrepreneurship"
    ]
  },
  {
    icon: faPalette,
    title: "Arts & Humanities",
    grades: "Grades 11-12",
    features: [
      "Literature",
      "History & Politics",
      "Psychology",
      "Fine Arts",
      "Media Studies",
      "Sociology"
    ]
  },
  {
    icon: faMusic,
    title: "Performing Arts",
    grades: "All Grades",
    features: [
      "Classical Dance",
      "Vocal Music",
      "Instrumental Music",
      "Theatre & Drama",
      "Public Speaking",
      "Annual Productions"
    ]
  },
  {
    icon: faFutbol,
    title: "Sports Academy",
    grades: "All Grades",
    features: [
      "Professional Coaching",
      "Multiple Sports",
      "Fitness Training",
      "Competitions",
      "Sports Psychology",
      "Nutrition Guidance"
    ]
  }
];

export default HomePage; 