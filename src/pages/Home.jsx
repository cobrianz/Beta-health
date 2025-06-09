import Features from '../components/Features';
import Hero from '../components/hero';
import Highlight from "../components/highlights";
import Appointment from "../components/Appointment";
const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Features />
      <Highlight />
      <Appointment />
    </div>
  );
};

export default Home;
