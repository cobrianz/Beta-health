import React from "react";
import { CheckCircle } from "@phosphor-icons/react";
import providerImage from "../assets/provider-img-2.png";
import providerImageShape from "../assets/provider-shape-2.png";

const TelehealthComponent = () => {
  return (
    <div className="telehealth-container">
      <div className="content-section">
        <h3 className="what-we-provide">What We Provide</h3>
        <h1 className="title">
          Resolves the disease by making face-to-face contact with patients on
          the telehealth platform.
        </h1>
        <p className="description">
          Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui
          posuere blandit. Vestibulum ac diam sit amet vehicula elementum.
        </p>
        <div className="stats-section">
          <div className="stat-item">
            <CheckCircle size={24} color="var(--green-500)" />
            <span>80% Of patients are interested in using telemedicine</span>
          </div>
          <div className="stat-item">
            <CheckCircle size={24} color="var(--green-500)" />
            <span>
              90% Of patients are satisfied with the telehealth experience
            </span>
          </div>
          <div className="stat-item">
            <CheckCircle size={24} color="var(--green-500)" />
            <span>
              40% Of patients use telemedicine due to short travel time
            </span>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={providerImage} alt="Doctor" />
        <img src={providerImageShape} alt="Shape" className="doctor-image" />
      </div>
    </div>
  );
};

export default TelehealthComponent;
