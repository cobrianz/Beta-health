import React from "react";
import {
  User,
  Envelope,
  Phone,
  CalendarBlank,
} from "@phosphor-icons/react";


const Appointment = () => {
  return (
    <div className="appointment-container">
      <p className="green">Make An Appointment</p>
      <h1 className="title">
        Contact us for any medical help and <br /> fill out an appointment form
      </h1>

      <form className="appointment-form">
        <div className="input-group">
          <div className="input-wrapper">
            <input type="text" placeholder="Full Name"/>
            <User size={20} />
          </div>
          <div className="input-wrapper">
            <input type="email" placeholder="Email Address" />
            <Envelope size={20} />
          </div>
        </div>

        <div className="input-group">
          <div className="input-wrapper">
            <input type="tel" placeholder="Phone Number"/>
            <Phone size={20} />
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="Booking Date" />
            <CalendarBlank size={20} />
          </div>
        </div>

        <div className="input-group">
          <div className="input-wrapper">
            <select defaultValue="">
              <option value="" disabled>Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>
          <div className="input-wrapper">
            <select defaultValue="">
              <option value="" disabled>Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Alice">Dr. Alice</option>
            </select>
          </div>
        </div>

        <button type="submit" className="appointment-button">Confirm Appointment</button>

        <div className="gender-options">
          <label><input type="radio" name="gender" /> Male</label>
          <label><input type="radio" name="gender" /> Female</label>
          <label><input type="radio" name="gender" /> Do not wish to disclose</label>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
