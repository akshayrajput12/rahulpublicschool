import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendarAlt,
  faVenusMars,
  faBook,
  faPhone,
  faHome,
  faFileUpload,
  faGraduationCap,
  faCheckCircle,
  faArrowRight,
  faArrowLeft,
  faPaperPlane,
  faInfoCircle,
  faSchool,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';
import {
  PersonalDetailsStep,
  ParentInfoStep,
  AcademicDetailsStep,
  DocumentsStep
} from './AdmissionsPage/FormSteps';

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    currentGrade: '',
    applyingForGrade: '',
    birthCertificate: null,
    aadharCard: null,
    parentName: '',
    parentContact: '',
    residentialAddress: '',
    emergencyContact: '',
    previousSchool: '',
    transferCertificate: null,
    reportCards: null,
    conductCertificate: null,
    proofOfResidence: null,
    admissionForm: null,
    entranceTest: null,
    interview: null,
    applicationFee: null,
    specialEducationRecords: null,
    legalCustodyDocuments: null,
    proofOfReligion: null,
    photos: null,
    parentSignature: null,
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Progress steps
  const steps = [
    { title: "Personal Details", icon: faUser },
    { title: "Parent Information", icon: faHome },
    { title: "Academic Details", icon: faBook },
    { title: "Documents Upload", icon: faFileUpload }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#111111] bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#1a1a1a] pt-24">
      {/* Hero Section */}
      <motion.section 
        className="text-center py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#e94560] to-[#ff6b81] text-transparent bg-clip-text"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Join Our Academic Community
        </motion.h1>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Begin your journey towards excellence with our comprehensive admission process.
        </motion.p>
      </motion.section>

      {/* Progress Steps */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  currentStep >= index ? 'bg-[#e94560]' : 'bg-gray-800'
                } transition-all duration-300 hover:shadow-lg hover:shadow-[#e94560]/20`}
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={step.icon} className="text-white" />
              </motion.div>
              <div className="text-gray-400 text-sm mt-2 hidden md:block">{step.title}</div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute w-16 h-0.5 bg-gray-800" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form Container */}
      <motion.div 
        className="container mx-auto px-4 max-w-4xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-[#1a1a1a] backdrop-blur-md rounded-xl p-8 border border-[#e94560]/20 shadow-xl hover:shadow-2xl hover:shadow-[#e94560]/10 transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <PersonalDetailsStep formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 1 && (
                <ParentInfoStep formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 2 && (
                <AcademicDetailsStep formData={formData} setFormData={setFormData} />
              )}
              {currentStep === 3 && (
                <DocumentsStep formData={formData} setFormData={setFormData} />
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <motion.button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg flex items-center hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Previous
                </motion.button>
              )}
              
              <motion.button
                type={currentStep === steps.length - 1 ? 'submit' : 'button'}
                onClick={() => currentStep < steps.length - 1 && setCurrentStep(prev => prev + 1)}
                className="px-6 py-2 bg-[#e94560] text-white rounded-lg flex items-center ml-auto hover:bg-[#d63d57] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Submitting...
                  </span>
                ) : currentStep === steps.length - 1 ? (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Submit Application
                  </>
                ) : (
                  <>
                    Next
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            Application submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admission Guidelines */}
      <section className="py-16 px-4 bg-[#1a1a1a]/50">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center bg-gradient-to-r from-[#e94560] to-[#ff6b81] text-transparent bg-clip-text mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Admission Guidelines
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: faGraduationCap,
                title: "Eligibility Criteria",
                description: "Check our comprehensive eligibility requirements for each grade level.",
                gradient: "from-[#FF6B6B] to-[#FF8E8E]"
              },
              {
                icon: faCalendarAlt,
                title: "Important Dates",
                description: "Stay updated with our admission timeline and key dates.",
                gradient: "from-[#4ECDC4] to-[#45B7AF]"
              },
              {
                icon: faFileUpload,
                title: "Required Documents",
                description: "Ensure you have all necessary documents ready for submission.",
                gradient: "from-[#FFD93D] to-[#FFC107]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`
                    bg-[#1a1a1a] backdrop-blur-md rounded-lg p-8
                    border border-[#e94560]/20 
                    transition-all duration-500 ease-out
                    group-hover:border-[#e94560]/40
                    relative z-10
                    ${item.gradient}
                  `}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Gradient Background Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ease-out"></div>

                  {/* Icon Container */}
                  <motion.div
                    className="relative w-16 h-16 mb-6 mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-[#e94560]/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                    
                    {/* Icon */}
                    <div className="relative bg-[#1a1a1a] rounded-full w-full h-full flex items-center justify-center border border-[#e94560]/30 group-hover:border-[#e94560]/60">
                      <motion.div
                        className="text-3xl text-[#e94560]"
                        initial={{ rotate: 0 }}
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 10, 0],
                          transition: {
                            duration: 0.6,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={item.icon} />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-bold text-white text-center mb-3"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="text-[#e94560]"
                    />
                  </motion.div>
                </motion.div>

                {/* Card Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/0 to-[#e94560]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage; 