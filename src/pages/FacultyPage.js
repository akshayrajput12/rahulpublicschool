import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaResearchgate, FaBook, FaTrophy, FaMedal } from 'react-icons/fa';
import styled from 'styled-components';

const FacultyPage = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar Sharma",
      position: "Principal & Professor of Physics",
      image: "/images/faculty/rajesh-sharma.jpg",
      specialization: "Quantum Physics & Nuclear Science",
      email: "principal@rahulschool.edu",
      linkedin: "linkedin.com/in/rajesh-sharma",
      researchgate: "researchgate.net/profile/rajesh-sharma",
      publications: 52,
      awards: [
        "National Science Excellence Award 2022",
        "Best Principal Award - CBSE 2023"
      ],
      bio: "Dr. Sharma brings 25 years of academic excellence, specializing in advanced physics education and school administration. Former IIT Delhi faculty member."
    },
    {
      id: 2,
      name: "Mrs. Priya Venkatesh",
      position: "Vice Principal & HOD Mathematics",
      image: "/images/faculty/priya-venkatesh.jpg",
      specialization: "Advanced Mathematics & Vedic Mathematics",
      email: "p.venkatesh@rahulschool.edu",
      linkedin: "linkedin.com/in/priya-venkatesh",
      researchgate: "researchgate.net/profile/priya-venkatesh",
      publications: 28,
      awards: [
        "Best Mathematics Teacher Award 2023",
        "National Teacher's Award 2021"
      ],
      bio: "Mrs. Venkatesh has transformed mathematics education with innovative teaching methods, helping students achieve 100% success rate in board exams."
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      position: "Head of Science Department",
      image: "/images/faculty/amit-patel.jpg",
      specialization: "Chemistry & Environmental Science",
      email: "a.patel@rahulschool.edu",
      linkedin: "linkedin.com/in/amit-patel",
      researchgate: "researchgate.net/profile/amit-patel",
      publications: 35,
      awards: [
        "Green Educator Award 2023",
        "Innovation in Science Teaching 2022"
      ],
      bio: "Dr. Patel leads various environmental initiatives and has established state-of-the-art chemistry labs in the school."
    },
    {
      id: 4,
      name: "Dr. Meena Krishnan",
      position: "Senior Biology Teacher",
      image: "/images/faculty/meena-krishnan.jpg",
      specialization: "Molecular Biology & Biotechnology",
      email: "m.krishnan@rahulschool.edu",
      linkedin: "linkedin.com/in/meena-krishnan",
      researchgate: "researchgate.net/profile/meena-krishnan",
      publications: 24,
      awards: [
        "Excellence in Medical Science Education 2023",
        "Best Research Paper - Biology Education 2022"
      ],
      bio: "Dr. Krishnan has guided numerous students to medical admissions and runs successful biology research programs."
    },
    {
      id: 5,
      name: "Mr. Suresh Iyer",
      position: "Head of Computer Science",
      image: "/images/faculty/suresh-iyer.jpg",
      specialization: "AI & Machine Learning",
      email: "s.iyer@rahulschool.edu",
      linkedin: "linkedin.com/in/suresh-iyer",
      researchgate: "researchgate.net/profile/suresh-iyer",
      publications: 18,
      awards: [
        "Technology Innovation Award 2023",
        "Best CS Teacher - CBSE 2022"
      ],
      bio: "Mr. Iyer has developed the school's cutting-edge computer science curriculum and leads the robotics club."
    },
    {
      id: 6,
      name: "Mrs. Anjali Deshmukh",
      position: "Head of Languages",
      image: "/images/faculty/anjali-deshmukh.jpg",
      specialization: "English Literature & Communication",
      email: "a.deshmukh@rahulschool.edu",
      linkedin: "linkedin.com/in/anjali-deshmukh",
      researchgate: "researchgate.net/profile/anjali-deshmukh",
      publications: 15,
      awards: [
        "Outstanding Language Teacher 2023",
        "Creative Writing Mentor Award 2022"
      ],
      bio: "Mrs. Deshmukh has published several books and runs successful creative writing programs for students."
    },
    {
      id: 7,
      name: "Dr. Sanjay Mehta",
      position: "Head of Social Sciences",
      image: "/images/faculty/sanjay-mehta.jpg",
      specialization: "History & Political Science",
      email: "s.mehta@rahulschool.edu",
      linkedin: "linkedin.com/in/sanjay-mehta",
      researchgate: "researchgate.net/profile/sanjay-mehta",
      publications: 42,
      awards: [
        "Best History Teacher Award 2023",
        "Social Science Innovation Award 2022"
      ],
      bio: "Dr. Mehta specializes in Indian history and has conducted numerous historical research projects with students."
    },
    {
      id: 8,
      name: "Mrs. Lakshmi Sundaram",
      position: "Head of Arts & Culture",
      image: "/images/faculty/lakshmi-sundaram.jpg",
      specialization: "Classical Dance & Music",
      email: "l.sundaram@rahulschool.edu",
      linkedin: "linkedin.com/in/lakshmi-sundaram",
      researchgate: "researchgate.net/profile/lakshmi-sundaram",
      publications: 12,
      awards: [
        "Cultural Excellence Award 2023",
        "Best Cultural Program Director 2022"
      ],
      bio: "Mrs. Sundaram is an accomplished Bharatanatyam dancer and has choreographed award-winning cultural programs."
    },
    {
      id: 9,
      name: "Mr. Rahul Verma",
      position: "Physical Education Director",
      image: "/images/faculty/rahul-verma.jpg",
      specialization: "Sports Science & Athletics",
      email: "r.verma@rahulschool.edu",
      linkedin: "linkedin.com/in/rahul-verma",
      researchgate: "researchgate.net/profile/rahul-verma",
      publications: 8,
      awards: [
        "Best Sports Coach 2023",
        "National Sports Promotion Award 2022"
      ],
      bio: "Mr. Verma has coached several state-level athletes and developed comprehensive sports programs."
    },
    {
      id: 10,
      name: "Dr. Kavita Malhotra",
      position: "Career Counselor & Psychology",
      image: "/images/faculty/kavita-malhotra.jpg",
      specialization: "Educational Psychology & Career Guidance",
      email: "k.malhotra@rahulschool.edu",
      linkedin: "linkedin.com/in/kavita-malhotra",
      researchgate: "researchgate.net/profile/kavita-malhotra",
      publications: 22,
      awards: [
        "Best Counselor Award 2023",
        "Student Support Excellence 2022"
      ],
      bio: "Dr. Malhotra has helped countless students choose successful career paths and provides vital mental health support."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageContainer>
        <Header>
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Distinguished Faculty
          </motion.h1>
          <SubHeader>Leading the future of education and research</SubHeader>
        </Header>

        <FacultyGrid>
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FacultyCard>
                <ImageContainer>
                  <FacultyImage src={faculty.image} alt={faculty.name} />
                </ImageContainer>
                <ContentContainer>
                  <Name>{faculty.name}</Name>
                  <Position>{faculty.position}</Position>
                  <Specialization>{faculty.specialization}</Specialization>
                  <Bio>{faculty.bio}</Bio>
                  
                  <Stats>
                    <StatItem>
                      <StatIcon><FaBook /></StatIcon>
                      <StatValue>{faculty.publications}</StatValue>
                      <StatLabel>Publications</StatLabel>
                    </StatItem>
                    <StatItem>
                      <StatIcon><FaTrophy /></StatIcon>
                      <StatValue>{faculty.awards.length}</StatValue>
                      <StatLabel>Awards</StatLabel>
                    </StatItem>
                  </Stats>

                  <AwardsList>
                    {faculty.awards.map((award, i) => (
                      <AwardItem key={i}>
                        <FaMedal /> {award}
                      </AwardItem>
                    ))}
                  </AwardsList>

                  <SocialLinks>
                    <SocialIcon href={`mailto:${faculty.email}`}>
                      <FaEnvelope />
                    </SocialIcon>
                    <SocialIcon href={faculty.linkedin} target="_blank">
                      <FaLinkedin />
                    </SocialIcon>
                    <SocialIcon href={faculty.researchgate} target="_blank">
                      <FaResearchgate />
                    </SocialIcon>
                  </SocialLinks>
                </ContentContainer>
              </FacultyCard>
            </motion.div>
          ))}
        </FacultyGrid>
      </PageContainer>
    </motion.div>
  );
};

// Updated Styled Components
const PageContainer = styled.div`
  padding: 2rem;
  background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d);
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  color: white;
  
  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    background: linear-gradient(to right, #e94560, #d5314c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SubHeader = styled.p`
  color: #888;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const FacultyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FacultyCard = styled.div`
  background: rgba(31, 31, 31, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(233, 69, 96, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const FacultyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${FacultyCard}:hover & {
    transform: scale(1.1);
  }
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
`;

const Name = styled.h2`
  color: white;
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

const Position = styled.h3`
  color: #e94560;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 500;
`;

const Specialization = styled.p`
  color: #a0a0a0;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #888;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #e94560;
    transform: translateY(-3px);
  }
`;

// New Styled Components
const Bio = styled.p`
  color: #888;
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.6;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatIcon = styled.div`
  color: #e94560;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: #888;
`;

const AwardsList = styled.div`
  margin: 1rem 0;
`;

const AwardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  
  svg {
    color: #e94560;
  }
`;

export default FacultyPage; 