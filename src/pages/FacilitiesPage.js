import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaFlask, FaBookReader, FaFutbol, FaSwimmer, 
  FaMusic, FaPalette, FaLaptopCode, FaBus, 
  FaFirstAid, FaUtensils, FaDumbbell, FaMicroscope,
  FaChalkboardTeacher, FaTheaterMasks, FaChess
} from 'react-icons/fa';

const facilities = [
  {
    id: 1,
    title: "Science Laboratories",
    icon: <FaFlask />,
    description: "State-of-the-art physics, chemistry, and biology labs equipped with modern apparatus and safety equipment.",
    features: [
      "Advanced lab equipment",
      "Safety gear for all students",
      "Smart boards for demonstrations",
      "Individual workstations",
      "Research facilities"
    ],
    image: "/images/facilities/science-lab.jpg"
  },
  {
    id: 2,
    title: "Digital Library",
    icon: <FaBookReader />,
    description: "Modern library with digital catalogs, e-books, and quiet study spaces for focused learning.",
    features: [
      "Digital catalog system",
      "E-book access",
      "Study pods",
      "Research databases",
      "Multimedia section"
    ],
    image: "/images/facilities/library.jpg"
  },
  {
    id: 3,
    title: "Sports Complex",
    icon: <FaFutbol />,
    description: "Comprehensive sports facilities including courts, fields, and training areas for various sports.",
    features: [
      "Football field",
      "Basketball courts",
      "Cricket pitch",
      "Athletics track",
      "Indoor sports arena"
    ],
    image: "/images/facilities/sports.jpg"
  },
  {
    id: 4,
    title: "Swimming Pool",
    icon: <FaSwimmer />,
    description: "Olympic-sized swimming pool with trained instructors and safety personnel.",
    features: [
      "Temperature controlled",
      "Professional trainers",
      "Separate training pool",
      "Changing rooms",
      "Lifeguard supervision"
    ],
    image: "/images/facilities/pool.jpg"
  },
  {
    id: 5,
    title: "Computer Labs",
    icon: <FaLaptopCode />,
    description: "Modern computer labs with latest hardware and software for digital learning.",
    features: [
      "High-speed internet",
      "Latest software",
      "3D printing facility",
      "Coding stations",
      "VR learning setup"
    ],
    image: "/images/facilities/computer-lab.jpg"
  },
  {
    id: 6,
    title: "Transport",
    icon: <FaBus />,
    description: "Safe and comfortable transportation service covering all major routes.",
    features: [
      "GPS tracking",
      "Experienced drivers",
      "First aid kits",
      "AC buses",
      "Real-time tracking app"
    ],
    image: "/images/facilities/transport.jpg"
  },
  {
    id: 7,
    title: "Performing Arts Center",
    icon: <FaTheaterMasks />,
    description: "Dedicated space for music, dance, and drama with professional equipment and training.",
    features: [
      "Acoustically designed halls",
      "Professional sound system",
      "Dance studios",
      "Practice rooms",
      "Recording studio"
    ],
    image: "/images/facilities/arts-center.jpg"
  },
  {
    id: 8,
    title: "Medical Center",
    icon: <FaFirstAid />,
    description: "On-campus medical facility with qualified healthcare professionals for emergency care.",
    features: [
      "24/7 medical staff",
      "Emergency response team",
      "Regular health checkups",
      "Mental health counseling",
      "Isolation ward"
    ],
    image: "/images/facilities/medical.jpg"
  },
  {
    id: 9,
    title: "Cafeteria",
    icon: <FaUtensils />,
    description: "Modern cafeteria serving nutritious meals with focus on hygiene and dietary requirements.",
    features: [
      "Balanced meal plans",
      "Special diet options",
      "Hygienic kitchen",
      "Comfortable seating",
      "Online menu system"
    ],
    image: "/images/facilities/cafeteria.jpg"
  },
  {
    id: 10,
    title: "Fitness Center",
    icon: <FaDumbbell />,
    description: "Well-equipped gymnasium with modern fitness equipment and professional trainers.",
    features: [
      "Modern equipment",
      "Personal trainers",
      "Fitness classes",
      "Yoga studio",
      "Health tracking"
    ],
    image: "/images/facilities/gym.jpg"
  },
  {
    id: 11,
    title: "Innovation Lab",
    icon: <FaMicroscope />,
    description: "Cutting-edge facility for robotics, AI, and advanced scientific research.",
    features: [
      "Robotics equipment",
      "AI workstations",
      "Research facilities",
      "Project spaces",
      "Innovation workshops"
    ],
    image: "/images/facilities/innovation-lab.jpg"
  },
  {
    id: 12,
    title: "Smart Classrooms",
    icon: <FaChalkboardTeacher />,
    description: "Technology-enabled classrooms with interactive learning tools and modern teaching aids.",
    features: [
      "Interactive boards",
      "Digital projectors",
      "Tablet integration",
      "Online collaboration tools",
      "Recording capability"
    ],
    image: "/images/facilities/smart-classroom.jpg"
  },
  {
    id: 13,
    title: "Art Studio",
    icon: <FaPalette />,
    description: "Creative space for visual arts with professional equipment and materials.",
    features: [
      "Painting studio",
      "Pottery workshop",
      "Sculpture area",
      "Digital art lab",
      "Exhibition space"
    ],
    image: "/images/facilities/art-studio.jpg"
  },
  {
    id: 14,
    title: "Music Room",
    icon: <FaMusic />,
    description: "Dedicated music facility with instruments and practice rooms for aspiring musicians.",
    features: [
      "Various instruments",
      "Sound-proof rooms",
      "Recording equipment",
      "Music library",
      "Performance space"
    ],
    image: "/images/facilities/music-room.jpg"
  },
  {
    id: 15,
    title: "Indoor Games",
    icon: <FaChess />,
    description: "Recreation area for indoor games and mental sports activities.",
    features: [
      "Chess club",
      "Table tennis",
      "Carrom boards",
      "Board games",
      "Strategy game zone"
    ],
    image: "/images/facilities/indoor-games.jpg"
  }
];

const FacilitiesPage = () => {
  return (
    <PageContainer>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>World-Class Facilities</h1>
        <p>Providing the best environment for learning and growth</p>
      </Header>

      <FacilitiesGrid>
        {facilities.map((facility, index) => (
          <FacilityCard
            key={facility.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <IconWrapper>
              {facility.icon}
            </IconWrapper>
            <FacilityContent>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
              <FeaturesList>
                {facility.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    • {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
            </FacilityContent>
          </FacilityCard>
        ))}
      </FacilitiesGrid>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(to bottom right, #111111, #1a1a1a);
  color: white;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    background: linear-gradient(to right, #e94560, #ff6b81);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  p {
    color: #888;
    font-size: 1.2rem;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FacilityCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(233, 69, 96, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(233, 69, 96, 0.1);
    border-color: rgba(233, 69, 96, 0.3);
    
    svg {
      transform: scale(1.1) rotate(5deg);
      color: #e94560;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #e94560;
  margin-bottom: 1.5rem;
  
  svg {
    transition: all 0.3s ease;
  }
`;

const FacilityContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #888;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  color: #aaa;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  &:before {
    content: '•';
    color: #e94560;
    margin-right: 0.5rem;
  }
`;

export default FacilitiesPage; 