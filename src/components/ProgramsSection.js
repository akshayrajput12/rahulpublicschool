import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBook, 
  faChalkboardTeacher, 
  faUsers, 
  faHandsHelping 
} from '@fortawesome/free-solid-svg-icons';

// Programs data
const programs = [
  { 
    icon: faBook, 
    title: "Science and Technology", 
    description: "Our Science and Technology program encourages students to explore the wonders of the universe through hands-on experiments and innovative projects.", 
    bgColor: 'bg-blue-300', 
    iconColor: 'text-blue-700' 
  },
  { 
    icon: faChalkboardTeacher, 
    title: "Arts and Humanities", 
    description: "Our Arts and Humanities program fosters creativity and critical thinking, allowing students to express themselves through various artistic mediums.", 
    bgColor: 'bg-purple-300', 
    iconColor: 'text-purple-700' 
  },
  { 
    icon: faUsers, 
    title: "Sports and Physical Education", 
    description: "Our Sports and Physical Education program promotes teamwork, discipline, and physical fitness through a variety of sports and activities.", 
    bgColor: 'bg-green-300', 
    iconColor: 'text-green-700' 
  },
  { 
    icon: faHandsHelping, 
    title: "Community Service", 
    description: "Our Community Service program encourages students to engage with the community, fostering a sense of responsibility and empathy.", 
    bgColor: 'bg-red-300', 
    iconColor: 'text-red-700' 
  }
];

const ProgramsSection = ({ scrollToSection }) => {
  return (
    <section id="programs" className="py-10 md:py-20 bg-gradient-to-b from-[#3A7D9A] to-[#A3D8E0] text-center min-h-screen flex flex-col justify-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#4A90E2]">
        <span className="text-yellow-500">Our</span> <span className="text-white">Programs</span>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {programs.map((program, index) => (
          <motion.div 
            key={index} 
            className={`p-4 md:p-6 ${program.bgColor} shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex justify-center mb-4"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={program.icon} className={`${program.iconColor} text-4xl md:text-5xl hover:animate-bounce`} />
            </motion.div>
            <h3 className="text-lg md:text-xl font-semibold text-[#4A90E2] mt-4">{program.title}</h3>
            <p className="mt-2 text-gray-600">{program.description}</p>
            <motion.button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition transform" 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faHandsHelping} className="mr-2" />
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection; 