import React from "react";
import { Link } from "react-router-dom";

import banner from "../../img/candy-kabin-banner.png";

export const Navbar = () => {
  const hoverHandle = (e) => {
    console.log(e.target.id);

    document.querySelector(`#${e.target.id}-links`).style.display = "block";
  };

  const mouseLeaveHandle = (e) => {
    document.querySelector("#shop-header-links").style.display = "none";
    document.querySelector("#new-in-links").style.display = "none";
    document.querySelector("#gifts-and-hampers-links").style.display = "none";
    document.querySelector("#more-links").style.display = "none";
    // document.querySelector("#traditional-links").style.display = "none";
    // document.querySelector("#dietary-links").style.display = "none";
  };

  return (
    <nav>
      {/* <div className="banner">
        <img src={banner} />
      </div> */}
      <div onMouseLeave={mouseLeaveHandle}>
        <h2 onMouseOver={hoverHandle} id="shop-header">
          SHOP
        </h2>
        <div
          className="list-link"
          id="shop-header-links"
          style={{ display: "none" }}
        >
          <ul className="header-links">
            <li>
              <Link to="/shop/international">
                <h2>International</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/sweets-and-candy">
                <h2>Sweets & Candy</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/pick-and-mix">
                <h2>Pick & Mix</h2>
              </Link>
            </li>

            <li>
              <Link to="/shop/traditional">
                <h2>Traditional</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/clearance">
                <h2>Clearance</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div onMouseLeave={mouseLeaveHandle}>
        <h2 onMouseOver={hoverHandle} id="gifts-and-hampers">
          GIFTS & HAMPERS
        </h2>
        <div
          className="list-link"
          id="gifts-and-hampers-links"
          style={{ display: "none" }}
          onMouseLeave={mouseLeaveHandle}
        >
          <ul className="header-links">
            <li>
              <Link to="/gifts-and-hampers/products">
                <h2>Products</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div onMouseLeave={mouseLeaveHandle}>
        <h2 onMouseOver={hoverHandle} id="new-in">
          NEW IN
        </h2>
        <div
          className="list-link"
          id="new-in-links"
          style={{ display: "none" }}
          onMouseLeave={mouseLeaveHandle}
        >
          <ul className="header-links">
            <li>
              <Link to="/new-in/products">
                <h2>Products</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div onMouseLeave={mouseLeaveHandle}>
        <h2 onMouseOver={hoverHandle} id="more">
          MORE
        </h2>
        <div
          className="list-link"
          id="more-links"
          style={{ display: "none" }}
          onMouseLeave={mouseLeaveHandle}
        >
          <ul className="header-links">
            <li>
              <Link to="/about-us">
                <h2>About Us</h2>
              </Link>
            </li>
            <li>
              <Link to="/frequently-asked-questions">
                <h2>Frequently Asked Questions</h2>
              </Link>
            </li>
            <li>
              <Link to="/customer-services">
                <h2>Customer Services</h2>
              </Link>
            </li>
            <li>
              <Link to="/allergy-information">
                <h2>Allergy Information</h2>
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy">
                <h2>Privacy Policy</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
