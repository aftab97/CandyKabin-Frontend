import React from "react";
import Logo from "../../img/Candy-Kabin-Logo-Bottom.png";
import Cards from "../../img/cards-gb.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bottom-footer">
      <div className="footer-logo-container">
        <img src={Logo} className="logo" alt="logo" />
        <img src={Cards} className="card" alt="cards" />
        <p className="copyright">
          © Candy Kabin (UK) Ltd,14-16 Newgate, Rochdale, OL16 1BA Copyright ©
        </p>
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
            <Link to="/returns-policy">Contact Us</Link>
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
