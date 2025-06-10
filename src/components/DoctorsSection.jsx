import React from "react";
import "./DoctorsSection.css";
import doctor-1 from "../assets/doc1.jpg";
import doctor-2 from "../assets/doc2.jpg";
import doctor-3 from "../assets/doc3.jpg";
import doctor-4 from "../assets/doc4.jpg";
const doctors = [
  { name: "Dr. Smith McDonald", title: "Cardiologist", img: "doc1.jpg" },
  { name: "Dr. Derek McDonald", title: "Cardiologist", img: "doc2.jpg" },
  { name: "Dr. Manuel Tannehill", title: "Orthopedic", img: "doc3.jpg" },
  {
    name: "Dr. Virginia Erickson",
    title: "Gastroenterologist",
    img: "doc4.jpg",
    social: true,
  },
];

const DoctorsSection = () => {
  return (
    <div className="doctors-section">
      <h4 className="subtitle">Our Doctors</h4>
      <h2 className="title">Meet Our Specialized Doctors</h2>
      <div className="doctors-container">
        {doctors.map((doc, index) => (
          <div
            className={`doctor-card ${doc.social ? "hover-reveal" : ""}`}
            key={index}
          >
            <img src={doc.img} alt={doc.name} className="doctor-img" />
            <div className="doctor-info">
              <h3>{doc.name}</h3>
              <p>{doc.title}</p>
            </div>
            {doc.social && (
              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsSection;
