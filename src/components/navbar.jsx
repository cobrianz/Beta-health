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
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About</Link>
          </li>
          <li>
            <Link className="link" to="/services">Services</Link>
          </li>
          <li>
            <Link className="link" to="/doctors">Our Doctors</Link>
          </li>
          <li>
            <Link className="link" to="/plans">Plans & Pricing</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-right">
        <span>+254 702 764 907</span>
        <Link className="btn" to="/appointment">Appointment</Link>
        <Link className="account-link" to="/login">
          <User size={30} />
        </Link>
    
      </div>
    </div>
  );
};

export default Navbar;
