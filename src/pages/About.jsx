import DynamicHeader from "../components/DynamicHeader";
import TestimonialSlider from "../components/TestimonialSlider";
import DoctorsSection from './../components/DoctorsSection';
import NewsletterSignup from './../components/NewsletterSignup';
import Footer from './../components/Footer';
import TelehealthComponent from './../components/TelehealthComponent';
import Highlight from './../components/highlights';
import Features from './../components/Features';
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div>
      <DynamicHeader />
      <AboutUs />
      <Features />
      <Highlight />
      <TelehealthComponent />
      <TestimonialSlider />
      <DoctorsSection />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default About;
