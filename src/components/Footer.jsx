import React from "react";
import logo from "../assets/logo.png";
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
  GooglePlayLogo,
  AppleLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="footer-logo">
          <img src={logo} alt="Tefri Logo" />
          <h2>Beta</h2>
        </div>
        <p>
          Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere
          blandit. Vivamus suscipit tortor eget.
        </p>
        <div className="footer-socials">
          <FacebookLogo size={34} weight="fill" />
          <TwitterLogo size={34} weight="fill" />
          <LinkedinLogo size={34} weight="fill" />
          <InstagramLogo size={34} weight="fill" />
        </div>
      </div>

      <div className="footer-column">
        <h3>Contacts Info</h3>
        <p>
          <strong>Address:</strong> 312 Nairobi, M2 080522
        </p>
        <p>
          <strong>Phone:</strong> +254(702) 76 4907
        </p>
        <p>
          <strong>Email:</strong> information@beta.com
        </p>
        <p>
          <strong>Time:</strong> Every day 24 hours
        </p>
      </div>

      <div className="footer-column">
        <h3>Quick Link</h3>
        <ul>
          <li>
            <span className="dot" /> About Us
          </li>
          <li>
            <span className="dot" /> Solutions
          </li>
          <li>
            <span className="dot" /> Contact Us
          </li>
          <li>
            <span className="dot" /> Privacy Policy
          </li>
          <li>
            <span className="dot" /> Terms of Use
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Apps Download</h3>
        <p>Download today and get your free copy from Apple and Play Store</p>
        <div className="footer-buttons">
          <button className="play-store">
            <GooglePlayLogo size={20} weight="fill" /> Play Store
          </button>
          <button className="app-store">
            <AppleLogo size={20} weight="fill" /> App Store
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
