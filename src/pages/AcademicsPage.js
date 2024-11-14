import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import {
  faGraduationCap,
  faFlask,
  faBook,
  faPencilAlt,
  faChalkboardTeacher,
  faTrophy,
  faLaptopCode,
  faPalette,
  faMusic,
  faDumbbell,
  faGlobe,
  faAtom,
  faCalculator,
  faMicroscope,
  faLanguage,
  faHistory,
  faTheaterMasks,
  faChartLine,
  faRobot,
  faBasketballBall,
  faChess,
  faCheckCircle,
  faArrowRight,
  faFlaskVial,
  faComputer,
  faVrCardboard,
  faChessBoard,
  faVolleyball,
  faSwimmer,
  faTableTennis,
  faPaintBrush,
  faGuitar,
  faGlobeAmericas,
  faVideo,
  faServer
} from '@fortawesome/free-solid-svg-icons';

const programs = [
  {
    title: "Science Stream",
    icon: faAtom,
    gradient: "from-[#FF6B6B] to-[#FF8E8E]",
    subjects: [
      "Physics with Advanced Lab Work",
      "Chemistry & Molecular Studies",
      "Biology & Life Sciences",
      "Advanced Mathematics",
      "Computer Science (Optional)"
    ],
    description: "Our science program emphasizes hands-on experimentation and research-based learning.",
    facilities: [
      "State-of-the-art Physics Lab",
      "Modern Chemistry Laboratory",
      "Bio-Tech Research Center",
      "Computer Programming Lab"
    ],
    achievements: [
      "100% Selection Rate in Medical/Engineering",
      "National Science Olympiad Winners",
      "Research Paper Publications"
    ]
  },
  {
    title: "Commerce Stream",
    icon: faChartLine,
    gradient: "from-[#4ECDC4] to-[#45B7AF]",
    subjects: [
      "Business Studies & Management",
      "Accountancy with GST",
      "Economics & Finance",
      "Business Mathematics",
      "Financial Markets (Optional)"
    ],
    description: "Comprehensive business education with real-world applications and industry exposure.",
    facilities: [
      "Business Innovation Lab",
      "Stock Market Simulation Room",
      "Entrepreneurship Center",
      "Digital Marketing Studio"
    ],
    achievements: [
      "Best Commerce College Award 2023",
      "National Business Competition Winners",
      "Successful Student Startups"
    ]
  },
  {
    title: "Humanities Stream",
    icon: faTheaterMasks,
    gradient: "from-[#FFD93D] to-[#FFC107]",
    subjects: [
      "Political Science",
      "History & World Affairs",
      "Psychology",
      "Sociology",
      "Mass Communication (Optional)"
    ],
    description: "Explore human society, culture, and behavior through our comprehensive humanities program.",
    facilities: [
      "Psychology Lab",
      "Media Production Studio",
      "Language Lab",
      "Social Research Center"
    ],
    achievements: [
      "UPSC Selections",
      "International Debate Champions",
      "Published Research Papers"
    ]
  }
];

const facilities = [
  {
    name: "Science & Technology Hub",
    icon: faFlaskVial,
    description: "State-of-the-art laboratories and research facilities",
    gradient: "from-[#FF6B6B] to-[#FF8E8E]",
    features: [
      {
        icon: faMicroscope,
        text: "Advanced Research Labs",
        details: "Equipped with latest scientific instruments"
      },
      {
        icon: faComputer,
        text: "Computer Centers",
        details: "Modern workstations with latest software"
      },
      {
        icon: faVrCardboard,
        text: "VR Learning Center",
        details: "Interactive 3D learning experience"
      },
      {
        icon: faServer,
        text: "High-Speed Network",
        details: "Campus-wide gigabit connectivity"
      }
    ]
  },
  {
    name: "Sports Complex",
    icon: faVolleyball,
    description: "International standard sports facilities for holistic development",
    gradient: "from-[#4ECDC4] to-[#45B7AF]",
    features: [
      {
        icon: faSwimmer,
        text: "Olympic Size Pool",
        details: "Temperature controlled swimming facility"
      },
      {
        icon: faTableTennis,
        text: "Indoor Sports Arena",
        details: "Multi-purpose courts for various games"
      },
      {
        icon: faChessBoard,
        text: "Strategic Games Zone",
        details: "Dedicated area for mind sports"
      },
      {
        icon: faDumbbell,
        text: "Fitness Center",
        details: "Modern gym with trained instructors"
      }
    ]
  },
  {
    name: "Creative Arts Center",
    icon: faPaintBrush,
    description: "Express creativity through various art forms",
    gradient: "from-[#FFD93D] to-[#FFC107]",
    features: [
      {
        icon: faGuitar,
        text: "Music Studio",
        details: "Professional recording equipment"
      },
      {
        icon: faTheaterMasks,
        text: "Performing Arts Theater",
        details: "300-seater auditorium"
      },
      {
        icon: faPalette,
        text: "Art Gallery",
        details: "Student exhibition space"
      },
      {
        icon: faVideo,
        text: "Digital Media Lab",
        details: "Video and audio production suite"
      }
    ]
  }
];

const achievements = [
  {
    title: "Academic Excellence",
    icon: faGraduationCap,
    stats: "100%",
    description: "Board Exam Success Rate",
    gradient: "from-[#FF6B6B] to-[#FF8E8E]"
  },
  {
    title: "Research Publications",
    icon: faBook,
    stats: "50+",
    description: "Published Research Papers",
    gradient: "from-[#4ECDC4] to-[#45B7AF]"
  },
  {
    title: "Sports Champions",
    icon: faTrophy,
    stats: "25+",
    description: "National Level Medals",
    gradient: "from-[#FFD93D] to-[#FFC107]"
  },
  {
    title: "Innovation Patents",
    icon: faLaptopCode,
    stats: "10+",
    description: "Student Patents Filed",
    gradient: "from-[#e94560] to-[#ff6b81]"
  }
];

const AcademicsPage = () => {
  const history = useHistory();

  const handleNavigateToFacilities = () => {
    history.push('/facilities');
  };

  return (
    <div className="min-h-screen bg-[#111111] bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#1a1a1a]">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#e94560] to-[#ff6b81] text-transparent bg-clip-text"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Academic Excellence
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover our comprehensive academic programs designed to nurture talent and inspire learning.
          </motion.p>
        </div>
      </motion.section>

      {/* Programs Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#e94560] to-[#ff6b81] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Academic Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`
                    bg-[#1a1a1a] backdrop-blur-md rounded-xl p-8
                    border border-[#e94560]/20 
                    transition-all duration-500 ease-out
                    group-hover:border-[#e94560]/40
                    relative z-10
                  `}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="relative w-16 h-16 mb-6 mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-[#e94560]/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-[#1a1a1a] rounded-full w-full h-full flex items-center justify-center border border-[#e94560]/30 group-hover:border-[#e94560]/60">
                      <motion.div
                        className="text-3xl text-[#e94560]"
                        initial={{ rotate: 0 }}
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 10, 0],
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                      >
                        <FontAwesomeIcon icon={program.icon} />
                      </motion.div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white text-center mb-4">{program.title}</h3>
                  <p className="text-gray-400 mb-6 text-center">{program.description}</p>

                  {/* Subjects */}
                  <div className="space-y-2 mb-6">
                    {program.subjects.map((subject, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                        whileHover={{ x: 10 }}
                      >
                        <span className="text-[#e94560] mr-2">•</span>
                        {subject}
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mt-6 pt-6 border-t border-[#e94560]/20">
                    <h4 className="text-[#e94560] font-semibold mb-3">Key Achievements</h4>
                    {program.achievements.map((achievement, idx) => (
                      <motion.div 
                        key={idx}
                        className="text-gray-400 text-sm mb-2"
                        whileHover={{ x: 5 }}
                      >
                        <FontAwesomeIcon icon={faTrophy} className="text-[#e94560] mr-2" />
                        {achievement}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Card Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/0 to-[#e94560]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-4 bg-[#1a1a1a]/50">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#e94560] to-[#ff6b81] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our World-Class Facilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={handleNavigateToFacilities}
              >
                <motion.div
                  className={`
                    bg-[#1a1a1a] backdrop-blur-md rounded-xl p-8
                    border border-[#e94560]/20
                    transition-all duration-500 ease-out
                    group-hover:border-[#e94560]/40
                    relative z-10
                    h-full
                  `}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="relative w-20 h-20 mb-6 mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Glowing background effect */}
                    <div className={`
                      absolute inset-0 rounded-full blur-md group-hover:blur-xl 
                      transition-all duration-300 bg-gradient-to-r ${facility.gradient}
                      opacity-20 group-hover:opacity-30
                    `}></div>
                    
                    {/* Icon */}
                    <div className="relative bg-[#1a1a1a] rounded-full w-full h-full flex items-center justify-center border border-[#e94560]/30 group-hover:border-[#e94560]/60">
                      <motion.div
                        className={`text-4xl bg-gradient-to-r ${facility.gradient} text-transparent bg-clip-text`}
                        initial={{ rotate: 0 }}
                        whileHover={{ 
                          rotate: 360,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                      >
                        <FontAwesomeIcon icon={facility.icon} />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <motion.h3 
                      className={`text-2xl font-bold mb-3 bg-gradient-to-r ${facility.gradient} text-transparent bg-clip-text`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {facility.name}
                    </motion.h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {facility.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {facility.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="text-gray-400 group-hover:text-gray-300 transition-all duration-300"
                        whileHover={{ x: 5, color: '#fff' }}
                      >
                        <div className="flex items-center mb-1">
                          <FontAwesomeIcon 
                            icon={feature.icon} 
                            className={`mr-2 bg-gradient-to-r ${facility.gradient} text-transparent bg-clip-text`}
                          />
                          <span className="font-medium">{feature.text}</span>
                        </div>
                        <p className="text-sm text-gray-500 pl-6">{feature.details}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* View More Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm text-[#e94560]">View More</span>
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="ml-2 text-[#e94560]"
                    />
                  </motion.div>
                </motion.div>

                {/* Card Shadow */}
                <div className={`
                  absolute inset-0 rounded-lg blur-xl opacity-0 
                  group-hover:opacity-30 transition-all duration-500 -z-10
                  bg-gradient-to-br ${facility.gradient}
                `}></div>
              </motion.div>
            ))}
          </div>

          {/* Explore All Facilities Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={handleNavigateToFacilities}
              className="
                px-8 py-3 rounded-full
                bg-gradient-to-r from-[#e94560] to-[#ff6b81]
                text-white font-semibold
                transition-all duration-300
                hover:shadow-lg hover:shadow-[#e94560]/20
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Facilities
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="py-16 px-4">
        {/* Add achievement content */}
      </section>
    </div>
  );
};

export default AcademicsPage; 