import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faCalendarAlt,
  faVenusMars,
  faSchool,
  faHome,
  faIdCard,
  faFileUpload,
  faImage,
  faFile,
  faSignature,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

// Reusable Input Component
const FormInput = ({ icon, label, type = "text", name, value, onChange, required = true }) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
  >
    <label className="block text-gray-300 mb-2 text-sm">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <FontAwesomeIcon icon={icon} />
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                 text-white focus:outline-none focus:border-blue-500 transition-colors"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  </motion.div>
);

// File Upload Component
const FileUpload = ({ label, name, onChange, accept = ".pdf,.doc,.docx" }) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
  >
    <label className="block text-gray-300 mb-2 text-sm">{label}</label>
    <div className="relative">
      <input
        type="file"
        name={name}
        onChange={onChange}
        accept={accept}
        className="hidden"
        id={name}
      />
      <label
        htmlFor={name}
        className="flex items-center justify-center w-full px-4 py-2 bg-white/5 
                 border border-white/10 rounded-lg text-white cursor-pointer
                 hover:bg-white/10 transition-colors"
      >
        <FontAwesomeIcon icon={faFileUpload} className="mr-2" />
        <span>Choose File</span>
      </label>
    </div>
  </motion.div>
);

export const PersonalDetailsStep = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          icon={faUser}
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <FormInput
          icon={faCalendarAlt}
          label="Date of Birth"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        <FormInput
          icon={faVenusMars}
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          type="select"
        />
        <FormInput
          icon={faSchool}
          label="Current Grade"
          name="currentGrade"
          value={formData.currentGrade}
          onChange={handleChange}
        />
      </div>
    </motion.div>
  );
};

export const ParentInfoStep = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Parent/Guardian Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          icon={faUser}
          label="Parent/Guardian Name"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
        />
        <FormInput
          icon={faPhone}
          label="Contact Number"
          name="parentContact"
          value={formData.parentContact}
          onChange={handleChange}
          type="tel"
        />
        <FormInput
          icon={faEnvelope}
          label="Email Address"
          name="parentEmail"
          value={formData.parentEmail}
          onChange={handleChange}
          type="email"
        />
        <FormInput
          icon={faPhone}
          label="Emergency Contact"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleChange}
          type="tel"
        />
        <FormInput
          icon={faHome}
          label="Residential Address"
          name="residentialAddress"
          value={formData.residentialAddress}
          onChange={handleChange}
          className="col-span-full"
        />
      </div>
    </motion.div>
  );
};

export const AcademicDetailsStep = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Academic Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          icon={faSchool}
          label="Previous School"
          name="previousSchool"
          value={formData.previousSchool}
          onChange={handleChange}
        />
        <FormInput
          icon={faSchool}
          label="Applying for Grade"
          name="applyingForGrade"
          value={formData.applyingForGrade}
          onChange={handleChange}
        />
      </div>
    </motion.div>
  );
};

export const DocumentsStep = ({ formData, setFormData }) => {
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const requiredDocuments = [
    { name: "birthCertificate", label: "Birth Certificate" },
    { name: "aadharCard", label: "Aadhar Card" },
    { name: "transferCertificate", label: "Transfer Certificate" },
    { name: "reportCards", label: "Previous Report Cards" },
    { name: "photos", label: "Recent Photographs", accept: "image/*" },
    { name: "parentSignature", label: "Parent Signature", accept: "image/*" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Required Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {requiredDocuments.map((doc) => (
          <FileUpload
            key={doc.name}
            label={doc.label}
            name={doc.name}
            onChange={handleFileChange}
            accept={doc.accept}
          />
        ))}
      </div>
      <motion.div
        className="bg-blue-500/10 p-4 rounded-lg mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="text-blue-400 text-sm">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          Please ensure all documents are clear and in PDF or image format.
        </p>
      </motion.div>
    </motion.div>
  );
}; 