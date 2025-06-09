import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { User } from "@phosphor-icons/react";
const Navbar = () => {
  return (
    <div className="navbar container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/doctors">Our Doctors</Link>
          </li>
          <li>
            <Link to="/plans">Plans & Pricing</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-right">
        <Link to="/appointment">Appointment</Link>
        <Link to="/account">
          <User size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
