import { CheckCircle } from "phosphor-react";
import patientImg from "../assets/patients-img";
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
        <h3>How We Help Patients</h3>
        <h2>
          We help patients with all the online-based services of Highlight &
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
      <div className="higlight-image">
        <img src={patientImg} alt="" />
      </div>
    </section>
  );
};

export default Highlight;
