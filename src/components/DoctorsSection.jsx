import React from "react";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import doc1 from "../assets/doctor-1.jpg";
import doc2 from "../assets/doctor-2.jpg";
import doc3 from "../assets/doctor-3.jpg";
import doc4 from "../assets/doctor-4.jpg";

const doctors = [
  { name: "Dr. Smith McDonald", title: "Cardiologist", img: doc1 },
  { name: "Dr. Derek McDonald", title: "Cardiologist", img: doc2 },
  { name: "Dr. Manuel Tannehill", title: "Orthopedic", img: doc3 },
  { name: "Dr. Virginia Erickson", title: "Gastroenterologist", img: doc4 },
];

const DoctorsSection = () => {
  return (
    <div className="doctors-section">
      <h4 className="subtitle">Our Doctors</h4>
      <h2 className="title">Meet Our Specialized Doctors</h2>
      <div className="doctors-container">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.img} alt={doc.name} className="doctor-img" />
            <div className="content">
              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <p>{doc.title}</p>
              </div>
              <div className="social-icons">
                <FacebookLogo size={20} weight="fill" />
                <TwitterLogo size={20} weight="fill" />
                <LinkedinLogo size={20} weight="fill" />
                <InstagramLogo size={20} weight="fill" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsSection;
