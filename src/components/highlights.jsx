import { CheckCircle } from "@phosphor-icons/react";
import patientImg from "../assets/patients-img.png";
const Highlight = () => {
  const benefits = [
    "Pay Less",
    "Time Saved",
    "Quality Compared",
    "Beta During COVID-19",
    "Share Documents Securely",
    "Primary Care & Urgent Care",
  ];

  return (
    <section className="highlight-section">
      <div className="highlight-content">
        <small>How We Help Patients</small>
        <h2>
          We help patients with all the online-based services of healthcare &
          Telemedicine.
        </h2>
        <p>
          We provide convenient access to healthcare from the comfort of your
          home. Our platform connects you with certified doctors for
          consultations, follow-ups, and urgent care needs.
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <CheckCircle size={24} color="#4ade80" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

        <img src={patientImg} alt="" className="highlight-image" />

    </section>
  );
};

export default Highlight;
