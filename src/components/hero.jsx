import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <span>Start Yout Journey</span>
        <h1>We provide Remote Health Care Services</h1>
        <p>
          Access quality medical consultations from the comfort of your home.
          Our expert doctors and healthcare providers are just one click away —
          ensuring that your health and wellbeing are always prioritized.
              </p>
              <div className="btn-container">
                  <Link to="/appointment" className="btn">Book Appointment</Link>
                  <Link to="/login" className="btn hero-btn">Get Started</Link>
              </div>
              <p><span>Have a question? </span><span><Link to={"/contact"}>Please Contact Us</Link></span></p>
          </div>
          <div className="hero-right">
              <div className="hero-right-div"></div>
                <img src={hero} alt="Hero" />
          </div>
    </div>
  );
}

export default Hero