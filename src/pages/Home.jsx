import Features from "../components/Features";
import Hero from "../components/hero";
import Highlight from "../components/highlights";
import AppointmentForm from "../components/AppointmentForm";
import DoctorsSection from "../components/DoctorsSection";
import TelehealthSolutions from "./../components/TelehealthSolutions";
import NewsletterSignup from "./../components/NewsletterSignup";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Features />
      <Highlight />
      <AppointmentForm />
      <DoctorsSection />
      <TelehealthSolutions />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Home;
