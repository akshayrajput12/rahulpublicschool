import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaHistory, FaTrophy, FaChalkboardTeacher,
  FaUsers, FaBookReader, FaSchool, FaAward, FaMedal,
  FaHandshake, FaLightbulb, FaHeart
} from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(to bottom right, #111111, #1a1a1a);
  color: white;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
  background: rgba(233, 69, 96, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(233, 69, 96, 0.2);

  h1 {
    font-size: 3.5rem;
    background: linear-gradient(to right, #e94560, #ff6b81);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    color: #888;
    font-size: 1.3rem;
  }
`;

const StatsSection = styled.section`
  margin: 3rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled(motion.div)`
  padding: 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(233, 69, 96, 0.1);
  transition: all 0.3s ease;

  svg {
    font-size: 2.5rem;
    color: #e94560;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: #888;
    font-weight: 500;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(233, 69, 96, 0.1);
    border-color: rgba(233, 69, 96, 0.3);
  }
`;

const VisionSection = styled.section`
  margin: 4rem 0;
`;

const VisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const VisionCard = styled(motion.div)`
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(233, 69, 96, 0.1);
  position: relative;

  h3 {
    color: #e94560;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: #888;
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(233, 69, 96, 0.1);
    border-color: rgba(233, 69, 96, 0.3);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #e94560;
`;

const ValuesSection = styled.section`
  margin: 4rem 0;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled(motion.div)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(233, 69, 96, 0.1);
  position: relative;

  svg {
    font-size: 2.5rem;
    color: #e94560;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: #888;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(233, 69, 96, 0.1);
    border-color: rgba(233, 69, 96, 0.3);
  }
`;

const LeadershipSection = styled.section`
  margin: 4rem 0;
`;

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const LeaderCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(233, 69, 96, 0.1);
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    background: rgba(233, 69, 96, 0.1);
    border-color: rgba(233, 69, 96, 0.3);
  }
`;

const LeaderImage = styled.div`
  height: 200px;
  background: #f0f0f0;
  .placeholder-image {
    width: 100%;
    height: 100%;
    background: #ddd;
  }
`;

const LeaderInfo = styled.div`
  padding: 2rem;

  h3 {
    color: #e94560;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  h4 {
    color: white;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    color: #888;
    margin-bottom: 0.5rem;
  }

  .message {
    color: #888;
    font-style: italic;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    margin-top: 1rem;
  }
`;

const MilestonesSection = styled.section`
  margin: 4rem 0;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  margin: 2rem 0;
  gap: 2rem;
`;

const TimelineYear = styled.div`
  font-weight: bold;
  min-width: 100px;
  color: #e94560;
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(233, 69, 96, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #e94560;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba(233, 69, 96, 0.2);
  }

  h3 {
    color: #e94560;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    color: #888;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(233, 69, 96, 0.1);
    border-color: rgba(233, 69, 96, 0.3);
  }
`;

const SectionHeader = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #e94560;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #e94560, #ff6b81);
    border-radius: 2px;
  }
`;

const schoolData = {
  established: "1995",
  students: "2500+",
  teachers: "150+",
  achievements: "100+",
  vision: "To nurture future leaders with strong values and academic excellence",
  mission: "Providing quality education through innovative teaching methods and holistic development",
  values: [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Embracing new ideas and methods in education"
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "Building character through honest and ethical practices"
    },
    {
      icon: <FaHeart />,
      title: "Empathy",
      description: "Fostering understanding and compassion"
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Creating a supportive learning environment"
    }
  ],
  leadership: [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      image: "path/to/principal-image.jpg",
      qualification: "Ph.D. in Education Leadership",
      experience: "25+ years",
      message: "We believe in nurturing not just students, but future leaders who will shape tomorrow."
    },
    {
      name: "Prof. Michael Chen",
      position: "Vice Principal",
      image: "path/to/vice-principal-image.jpg",
      qualification: "M.Ed. in Educational Administration",
      experience: "20+ years",
      message: "Our focus is on holistic development that goes beyond academic excellence."
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Head of Academics",
      image: "path/to/academic-head-image.jpg",
      qualification: "M.Sc., B.Ed.",
      experience: "18+ years",
      message: "We strive to create an environment that fosters creativity and critical thinking."
    }
  ],
  milestones: [
    {
      year: "1995",
      title: "School Establishment",
      description: "Founded with a vision of excellence in education"
    },
    {
      year: "2005",
      title: "Sports Complex",
      description: "State-of-the-art sports facilities inaugurated"
    },
    {
      year: "2010",
      title: "Digital Innovation",
      description: "Integration of smart classrooms and digital learning"
    },
    {
      year: "2015",
      title: "Excellence Award",
      description: "Recognized as one of the top schools in the region"
    },
    {
      year: "2020",
      title: "Research Center",
      description: "Established advanced research facilities"
    }
  ]
};

const AboutPage = () => {
  return (
    <PageContainer>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Our School</h1>
        <p>Building Tomorrow's Leaders Today</p>
      </Header>

      {/* Quick Stats Section */}
      <StatsSection>
        <StatsGrid>
          {[
            { icon: <FaSchool />, value: schoolData.established, label: "Established" },
            { icon: <FaUsers />, value: schoolData.students, label: "Students" },
            { icon: <FaChalkboardTeacher />, value: schoolData.teachers, label: "Teachers" },
            { icon: <FaTrophy />, value: schoolData.achievements, label: "Achievements" }
          ].map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {stat.icon}
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>

      {/* Vision & Mission Section */}
      <VisionSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SectionHeader>Our Vision & Mission</SectionHeader>
          <VisionGrid>
            <VisionCard whileHover={{ scale: 1.02 }}>
              <IconWrapper>
                <FaBookReader />
              </IconWrapper>
              <h3>Vision</h3>
              <p>{schoolData.vision}</p>
            </VisionCard>
            <VisionCard whileHover={{ scale: 1.02 }}>
              <IconWrapper>
                <FaGraduationCap />
              </IconWrapper>
              <h3>Mission</h3>
              <p>{schoolData.mission}</p>
            </VisionCard>
          </VisionGrid>
        </motion.div>
      </VisionSection>

      {/* Core Values Section */}
      <ValuesSection>
        <SectionHeader>Our Core Values</SectionHeader>
        <ValuesGrid>
          {schoolData.values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {value.icon}
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      {/* Leadership Section */}
      <LeadershipSection>
        <SectionHeader>School Leadership</SectionHeader>
        <LeadershipGrid>
          {schoolData.leadership.map((leader, index) => (
            <LeaderCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <LeaderImage>
                {/* Replace with actual image */}
                <div className="placeholder-image" />
              </LeaderImage>
              <LeaderInfo>
                <h3>{leader.name}</h3>
                <h4>{leader.position}</h4>
                <p className="qualification">{leader.qualification}</p>
                <p className="experience">{leader.experience}</p>
                <p className="message">"{leader.message}"</p>
              </LeaderInfo>
            </LeaderCard>
          ))}
        </LeadershipGrid>
      </LeadershipSection>

      {/* Milestones Section */}
      <MilestonesSection>
        <SectionHeader>Our Journey</SectionHeader>
        <Timeline>
          {schoolData.milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <TimelineYear>{milestone.year}</TimelineYear>
              <TimelineContent>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </MilestonesSection>
    </PageContainer>
  );
};

export default AboutPage; 