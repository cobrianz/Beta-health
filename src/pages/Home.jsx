import Features from '../components/Features';
import Hero from '../components/hero';
import Highlight from '../components/highlights';
const Home = () => {
  return (
    <div className='container'>
      <Hero />
      <Features />
      <Highlight />
    </div>
  );
};

export default Home;
