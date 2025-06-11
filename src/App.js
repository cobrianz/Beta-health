import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Blog from "./pages/Blog";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import HowWeHelp from "./pages/HowWeHelp";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import PlansPricing from "./pages/PlansPricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Solutions from "./pages/Solutions";
import TermsConditions from "./pages/TermsConditions";
import Testimonial from "./pages/Testimonial";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="blog" element={<Blog />} />
          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="contact" element={<Contact />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="how-we-help" element={<HowWeHelp />} />
          <Route path="login" element={<Login />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="plans-pricing" element={<PlansPricing />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="register" element={<Register />} />
          <Route path="services" element={<Services />} />
          <Route path="shop" element={<Shop />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
