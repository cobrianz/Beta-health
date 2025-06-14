import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Asclepius ,
  User,
  Phone,
  Baby,
  ShoppingCart,
  Brain,
  RadioButtonIcon,
} from "@phosphor-icons/react";

const services = [
  {
    id: 1,
    title: "Digestive Health",
    description:
      "Expert care for digestive issues with personalized treatment plans.",
    icon: <Asclepius  size={40} color="#1e90ff" />,
    readMore: "/digestive-health",
  },
  {
    id: 2,
    title: "COVID-19 Consulting",
    description:
      "Professional advice and support for COVID-19 related concerns.",
    icon: <User size={40} color="#1e90ff" />,
    readMore: "/covid-19-consulting",
  },
  {
    id: 3,
    title: "Special Follow Up",
    description: "Dedicated follow-up to ensure ongoing health and recovery.",
    icon: <Phone size={40} color="#1e90ff" />,
    readMore: "/special-follow-up",
  },
  {
    id: 4,
    title: "Pediatric Services",
    description:
      "Comprehensive care for children with routine and specialized treatments.",
    icon: <Baby size={40} color="#1e90ff" />,
    readMore: "/pediatric-services",
  },
  {
    id: 5,
    title: "Digital Pharmacy",
    description:
      "Access medications and health products delivered to your door.",
    icon: <ShoppingCart size={40} color="#1e90ff" />,
    readMore: "/digital-pharmacy",
  },
  {
    id: 6,
    title: "Mental Health",
    description: "Online counseling and therapy for mental well-being.",
    icon: <Brain size={40} color="#1e90ff" />,
    readMore: "/mental-health",
  },
];

const TelemedicineServices = () => {
  return (
    <div className="telemedicine-services-container container">
      <span className="services-label">Our Services</span>
      <h2 className="services-title">Telemedicine Professional Services</h2>
      <div className="services-grid">
        <AnimatePresence>
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">
                {service.description}
              </p>
              <a href={service.readMore} className="read-more-link">
                Read More
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="pagination">
        <button>
          &lt;
        </button>
    
        <button>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TelemedicineServices;
