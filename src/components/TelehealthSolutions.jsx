import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "@phosphor-icons/react";
import solImage from "../assets/solutions-img.jpg";
const FEATURES = [
  {
    title: "Improved Health Access",
    description:
      "Patients can consult doctors remotely, improving access to healthcare for remote communities.",
  },
  {
    title: "Appointment Management",
    description:
      "Easily schedule and manage appointments online with reminders and notifications.",
  },
  {
    title: "Clinical Data Management",
    description:
      "Securely store and retrieve medical records and share them between providers.",
  },
  {
    title: "Dedicated Quality Assurance",
    description:
      "Quality control processes ensure accurate diagnoses and secure communication.",
  },
];

export default function TelehealthSolutions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="telehealth-section container">
      <div className="telehealth-text">
        <p className="telehealth-subtitle">Consumer Telehealth Solutions</p>
        <h2 className="telehealth-title">
          The telehealth platform provides <br /> solutions to all sorts of
          problems
        </h2>
        <ul className="telehealth-list">
          {FEATURES.map((feature, index) => (
            <li
              key={index}
              className="telehealth-feature"
              onClick={() => toggleFeature(index)}
            >
              {openIndex === index ? (
                <MinusCircle size={24} weight="fill" className="feature-icon" />
              ) : (
                <PlusCircle size={24} weight="fill" className="feature-icon" />
              )}
              <div>
                <span>{feature.title}</span>
                {openIndex === index && (
                  <p className="feature-description">{feature.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="telehealth-image-container">
        <div className="telehealth-image-wrapper">
          <img
            src={solImage}
            alt="Telehealth Doctor"
            className="telehealth-image"
          />
          <div className="play-button">
            <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
