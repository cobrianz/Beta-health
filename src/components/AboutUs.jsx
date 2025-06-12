import React from "react";
import { Users } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="about-us-container container">
      <motion.div
        className="about-us-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="about-us-label">Who We Are</span>
        <h2 className="about-us-title">
          We conduct all kinds of activities to get safe telehealth and
          telemedicine at home.
        </h2>
        <p className="about-us-text">
          We are dedicated to providing high-quality healthcare services through
          our telehealth platform. Our team works tirelessly to ensure patients
          receive safe and effective treatment from the comfort of their homes.
          We strive to improve healthcare accessibility with innovative
          solutions.
        </p>
        <Users size={24} color="#00a3a3" className="about-us-icon" />
      </motion.div>
    </div>
  );
};

export default AboutUs;
