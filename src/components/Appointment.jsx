import { Calendar } from "@phosphor-icons/react";

const Appointment = () => {
  return (
    <section className="appointment-section">
      <div className="appointment-image">
        <p>Placeholder for appointment calendar illustration</p>
        <Calendar size={64} weight="duotone" color="#4ade80" />
      </div>
      <div className="appointment-form">
        <h3>Make An Appointment</h3>
        <h2>
          Contact us for any medical help and fill out an appointment form
        </h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              defaultValue="Evan Edwards"
            />
            <input
              type="email"
              placeholder="Email Address"
              defaultValue="tefri@gmail.com"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone Number"
              defaultValue="+1(135) 1984 2020"
            />
            <input type="date" placeholder="Booking Date" />
          </div>
          <div className="form-group">
            <select defaultValue="Select Department">
              <option value="Select Department">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
            <select defaultValue="Select Doctor">
              <option value="Select Doctor">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
            </select>
          </div>
          <div className="form-group gender-group">
            <label>Gender:</label>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" /> Do not wish to
              disclose
            </label>
          </div>
          <button type="submit">Confirm Appointment</button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
