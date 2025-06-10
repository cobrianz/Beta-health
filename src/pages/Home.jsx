import Features from '../components/Features';
import Hero from '../components/hero';
import Highlight from "../components/highlights";
import Appointment from "../components/Appointment";
import DoctorsSection from '../components/DoctorsSection';
const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Features />
      <Highlight />
      <Appointment />
      <DoctorsSection />
    </div>
  );
};

export default Home;
