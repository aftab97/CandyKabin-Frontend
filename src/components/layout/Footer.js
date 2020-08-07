import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bottom-footer">
      <div className="footer-logo-container">
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <div className="footer-list-container">
        <ul>
          <h4 className="list-title-footer">SUPPORT</h4>
          <li>
            <Link to="/customer-services">Customer Services</Link>
          </li>
          <li>
            <Link to="/allergy-information">Allergy Information</Link>
          </li>
          <li>
            <Link to="/frequently-asked-questions">
              Frequently Asked Questions
            </Link>
          </li>
        </ul>

        <ul>
          <h4 className="list-title-footer">INFORMATION</h4>
          <li>
            <Link to="/delivery-information">Delivery Information</Link>
          </li>
          <li>
            <Link to="/returns-policy">Returns Policy</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>

        <ul>
          <h4 className="list-title-footer">LEGAL</h4>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
