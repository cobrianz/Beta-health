import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stomach,
  User,
  Phone,
  Baby,
  ShoppingCart,
  Brain,
} from "@phosphor-icons/react";

const services = [
  {
    id: 1,
    title: "Digestive Health",
    description:
      "We provide expert care for digestive issues, offering consultations and personalized treatment plans.",
    icon: <Stomach size={40} color="#1e90ff" />,
    readMore: "/digestive-health",
  },
  {
    id: 2,
    title: "COVID-19 Consulting",
    description:
      "Get professional advice and support for COVID-19 related concerns from our experienced team.",
    icon: <User size={40} color="#1e90ff" />,
    readMore: "/covid-consulting",
  },
  {
    id: 3,
    title: "Special Follow Up",
    description:
      "Dedicated follow-up services to ensure your recovery and ongoing health needs are met.",
    icon: <Phone size={40} color="#1e90ff" />,
    readMore: "/special-follow-up",
  },
  {
    id: 4,
    title: "Pediatric Services",
    description:
      "Comprehensive care for children, including routine check-ups and specialized treatments.",
    icon: <Baby size={40} color="#1e90ff" />,
    readMore: "/pediatric-services",
  },
  {
    id: 5,
    title: "Digital Pharmacy",
    description:
      "Access a wide range of medications and health products delivered straight to your door.",
    icon: <ShoppingCart size={40} color="#1e90ff" />,
    readMore: "/digital-pharmacy",
  },
  {
    id: 6,
    title: "Mental Health",
    description:
      "Support for mental well-being with counseling and therapy services online.",
    icon: <Brain size={40} color="#1e90ff" />,
    readMore: "/mental-health",
  },
];

const TelemedicineServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const paginatedServices = services.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="telemedicine-services-container">
      <span className="services-label">Our Services</span>
      <h2 className="services-title">Telemedicine Professional Services</h2>
      <div className="services-grid">
        <AnimatePresence>
          {paginatedServices.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.readMore} className="read-more">
                Read More
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`pagination-button ${
              currentPage === page ? "active" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TelemedicineServices;
