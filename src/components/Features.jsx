import featuresData from "../Data/features";

const Features = () => {
  return (
      <section className="features-section">
          <span className="green">What we offer</span>
      <h2>Features Providers and Patients Love</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
