import Features from '../components/Features';
import Hero from '../components/hero';
import Highlight from "../components/highlights";
import Appointment from "../components/Appointment";
import DoctorsSection from '../components/DoctorsSection';
import TelehealthSolutions from './../components/TelehealthSolutions';
import NewsletterSignup from './../components/NewsletterSignup';
const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Features />
      <Highlight />
      <Appointment />
      <DoctorsSection />
      <TelehealthSolutions />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
