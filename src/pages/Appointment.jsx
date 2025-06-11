import DynamicHeader from "../components/DynamicHeader";
import AppointmentForm from "../components/AppointmentForm";
import TelehealthComponent from "../components/TelehealthComponent";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
const Appointment = () => {
  return (
    <div>
      <DynamicHeader />
      <AppointmentForm />
      <TelehealthComponent />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Appointment;
