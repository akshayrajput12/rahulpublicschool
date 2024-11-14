import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChalkboardTeacher, FaGraduationCap, FaCalendarAlt, 
  FaMoneyBillWave, FaFileAlt, FaCheckCircle, FaUserTie,
  FaBuilding, FaClock, FaBriefcase, FaArrowRight, FaWhatsapp, FaEnvelope, FaCloudUploadAlt, FaPhone, FaUser, FaLinkedin
} from 'react-icons/fa';

const openPositions = [
  {
    id: 1,
    title: "Mathematics Teacher",
    department: "Secondary Education",
    experience: "3-5 years",
    qualification: "M.Sc. Mathematics, B.Ed",
    type: "Full-time",
    salary: "₹30,000 - ₹45,000",
    deadline: "2024-04-30",
    responsibilities: [
      "Teach Mathematics to secondary classes",
      "Prepare lesson plans and learning materials",
      "Conduct assessments and evaluate student progress",
      "Participate in school activities and meetings"
    ]
  },
  {
    id: 2,
    title: "Science Teacher",
    department: "Middle School",
    experience: "2-4 years",
    qualification: "B.Sc., B.Ed",
    type: "Full-time",
    salary: "₹25,000 - ₹40,000",
    deadline: "2024-04-25",
    responsibilities: [
      "Teach Science subjects to middle school students",
      "Conduct practical laboratory sessions",
      "Develop innovative teaching methodologies",
      "Monitor student progress and maintain records"
    ]
  },
  {
    id: 3,
    title: "Physical Education Trainer",
    department: "Sports",
    experience: "3+ years",
    qualification: "B.P.Ed or M.P.Ed",
    type: "Full-time",
    salary: "₹28,000 - ₹42,000",
    deadline: "2024-05-10",
    responsibilities: [
      "Conduct physical education classes",
      "Coach sports teams",
      "Organize sports events",
      "Maintain sports equipment and facilities"
    ]
  }
];

const CareerPage = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleViewDetails = (position) => {
    setSelectedPosition(position);
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  return (
    <PageContainer>
      <Header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Join Our Team</h1>
        <p>Shape the future of education with us</p>
      </Header>

      <WhyJoinUs>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Why Join Us?
        </motion.h2>
        <BenefitsGrid>
          {[
            { icon: <FaGraduationCap />, text: "Professional Development" },
            { icon: <FaMoneyBillWave />, text: "Competitive Salary" },
            { icon: <FaBuilding />, text: "Modern Infrastructure" },
            { icon: <FaUserTie />, text: "Career Growth" }
          ].map((benefit, index) => (
            <BenefitCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {benefit.icon}
              <span>{benefit.text}</span>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </WhyJoinUs>

      <OpenPositions>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Open Positions
        </motion.h2>
        <PositionsGrid>
          {openPositions.map((position, index) => (
            <PositionCard
              key={position.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleViewDetails(position)}
            >
              <PositionIcon>
                <FaChalkboardTeacher />
              </PositionIcon>
              <PositionDetails>
                <h3>{position.title}</h3>
                <PositionInfo>
                  <span><FaBriefcase /> {position.department}</span>
                  <span><FaClock /> {position.experience}</span>
                  <span><FaCalendarAlt /> Due: {new Date(position.deadline).toLocaleDateString()}</span>
                </PositionInfo>
                <ApplyButton>
                  View Details <FaArrowRight />
                </ApplyButton>
              </PositionDetails>
            </PositionCard>
          ))}
        </PositionsGrid>
      </OpenPositions>

      <AnimatePresence>
        {selectedPosition && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <CloseButton onClick={() => setSelectedPosition(null)}>×</CloseButton>
              <h2>{selectedPosition.title}</h2>
              <ModalGrid>
                <ModalItem>
                  <FaBriefcase /> Department: {selectedPosition.department}
                </ModalItem>
                <ModalItem>
                  <FaGraduationCap /> Required: {selectedPosition.qualification}
                </ModalItem>
                <ModalItem>
                  <FaClock /> Experience: {selectedPosition.experience}
                </ModalItem>
                <ModalItem>
                  <FaMoneyBillWave /> Salary: {selectedPosition.salary}
                </ModalItem>
              </ModalGrid>
              <h3>Responsibilities:</h3>
              <ResponsibilitiesList>
                {selectedPosition.responsibilities.map((resp, index) => (
                  <li key={index}><FaCheckCircle /> {resp}</li>
                ))}
              </ResponsibilitiesList>
              <ApplyNowButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleApplyClick}
              >
                Apply Now <FaArrowRight />
              </ApplyNowButton>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showApplicationForm && selectedPosition && (
          <ApplicationFormModal
            position={selectedPosition}
            onClose={() => {
              setShowApplicationForm(false);
              setSelectedPosition(null);
            }}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

// Styled Components
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

const WhyJoinUs = styled.section`
  margin-bottom: 4rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #e94560;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BenefitCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(233, 69, 96, 0.1);

  svg {
    font-size: 2.5rem;
    color: #e94560;
  }

  span {
    font-size: 1.1rem;
    color: #fff;
  }

  &:hover {
    background: rgba(233, 69, 96, 0.1);
    border-color: rgba(233, 69, 96, 0.3);
  }
`;

const OpenPositions = styled.section`
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #e94560;
    text-align: center;
  }
`;

const PositionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PositionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  cursor: pointer;
  border: 1px solid rgba(233, 69, 96, 0.1);
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(233, 69, 96, 0.1);
    border-color: rgba(233, 69, 96, 0.3);
  }
`;

const PositionIcon = styled.div`
  font-size: 2.5rem;
  color: #e94560;
`;

const PositionDetails = styled.div`
  flex: 1;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const PositionInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #888;
    font-size: 0.9rem;

    svg {
      color: #e94560;
    }
  }
`;

const ApplyButton = styled.button`
  background: transparent;
  color: #e94560;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  position: relative;
  border: 1px solid rgba(233, 69, 96, 0.2);

  h2 {
    color: #e94560;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #fff;
    margin: 1.5rem 0 1rem;
  }
`;

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ModalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;

  svg {
    color: #e94560;
  }
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #888;
    margin-bottom: 0.5rem;

    svg {
      color: #e94560;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;

  &:hover {
    color: #e94560;
  }
`;

const ApplyNowButton = styled(motion.button)`
  background: #e94560;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  width: 100%;
  justify-content: center;
`;

const ApplicationFormModal = ({ position, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    linkedin: '',
    resume: null,
    message: ''
  });

  if (!position) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleWhatsApp = () => {
    const text = `Hi, I'm interested in the ${position.title} position at your school.`;
    window.open(`https://wa.me/+91YOURSCHOOLNUMBER?text=${encodeURIComponent(text)}`);
  };

  const handleEmail = () => {
    const subject = `Application for ${position.title} position`;
    const body = `Hi, I'm interested in the ${position.title} position at your school.`;
    window.location.href = `mailto:careers@yourschool.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Modal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ApplicationFormContent
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Apply for {position.title}</h2>
        
        <QuickApplyOptions>
          <QuickApplyButton onClick={handleWhatsApp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FaWhatsapp /> Apply via WhatsApp
          </QuickApplyButton>
          <QuickApplyButton onClick={handleEmail} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FaEnvelope /> Apply via Email
          </QuickApplyButton>
        </QuickApplyOptions>

        <Divider>
          <span>OR</span>
        </Divider>

        <Form onSubmit={handleSubmit}>
          <FormGrid>
            <FormField>
              <FormIcon><FaUser /></FormIcon>
              <Input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </FormField>

            <FormField>
              <FormIcon><FaEnvelope /></FormIcon>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </FormField>

            <FormField>
              <FormIcon><FaPhone /></FormIcon>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </FormField>

            <FormField>
              <FormIcon><FaLinkedin /></FormIcon>
              <Input
                type="url"
                placeholder="LinkedIn Profile URL (Optional)"
                value={formData.linkedin}
                onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
              />
            </FormField>
          </FormGrid>

          <ResumeUpload>
            <FileInput
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
              required
            />
            <FileInputLabel htmlFor="resume" whileHover={{ scale: 1.02 }}>
              <FaCloudUploadAlt />
              {formData.resume ? formData.resume.name : 'Upload Resume (PDF, DOC)'}
            </FileInputLabel>
          </ResumeUpload>

          <TextArea
            placeholder="Cover Letter / Additional Message (Optional)"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Application
          </SubmitButton>
        </Form>
      </ApplicationFormContent>
    </Modal>
  );
};

const ApplicationFormContent = styled(motion.div)`
  background: #1a1a1a;
  padding: 2.5rem;
  border-radius: 20px;
  max-width: 800px;
  width: 90%;
  position: relative;
  border: 1px solid rgba(233, 69, 96, 0.2);
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    color: #e94560;
    margin-bottom: 2rem;
    text-align: center;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e94560;
    border-radius: 4px;
  }
`;

const QuickApplyOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const QuickApplyButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(233, 69, 96, 0.2);
  padding: 1rem;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(233, 69, 96, 0.1);
    border-color: #e94560;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
  color: #888;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  span {
    padding: 0 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const FormField = styled.div`
  position: relative;
`;

const FormIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #e94560;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(233, 69, 96, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #e94560;
    background: rgba(233, 69, 96, 0.1);
  }

  &::placeholder {
    color: #888;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(233, 69, 96, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #e94560;
    background: rgba(233, 69, 96, 0.1);
  }

  &::placeholder {
    color: #888;
  }
`;

const ResumeUpload = styled.div`
  width: 100%;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled(motion.label)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px dashed rgba(233, 69, 96, 0.2);
  border-radius: 10px;
  color: #888;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
    color: #e94560;
  }

  &:hover {
    background: rgba(233, 69, 96, 0.1);
    border-color: #e94560;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #e94560;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #d63d57;
  }
`;

export default CareerPage; 