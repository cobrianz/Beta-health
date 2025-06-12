import DynamicHeader from "../components/DynamicHeader";
import TestimonialSlider from "../components/TestimonialSlider";
import DoctorsSection from './../components/DoctorsSection';
import NewsletterSignup from './../components/NewsletterSignup';
import Footer from './../components/Footer';
import TelehealthComponent from './../components/TelehealthComponent';
import TelehealthSolutions from './../components/TelehealthSolutions';
import Highlight from './../components/highlights';

const About = () => {
  return (
    <div>
      <DynamicHeader />
      <Highlight />
      <TelehealthSolutions />
      <TelehealthComponent />
      <TestimonialSlider />
      <DoctorsSection />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default About;
