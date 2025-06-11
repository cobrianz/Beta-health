import Features from '../components/Features';
import Hero from '../components/hero';
import Highlight from "../components/highlights";
import Appointment from "../components/Appointment";
import DoctorsSection from '../components/DoctorsSection';
import TelehealthSolutions from './../components/TelehealthSolutions';
import NewsletterSignup from './../components/NewsletterSignup';
import Footer from '../components/Footer';
import TelehealthComponent from '../components/TelehealthComponent';
const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Features />
      <Highlight />
      <Appointment />
      <DoctorsSection />
      <TelehealthSolutions />
      <TelehealthComponent />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Home;
