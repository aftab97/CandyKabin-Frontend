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
    document.querySelector("#pick-mix-links").style.display = "none";
    document.querySelector("#traditional-links").style.display = "none";
    document.querySelector("#dietary-links").style.display = "none";
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
              <Link to="/shop/chocolatebars">
                <h2>CHOCOLATE BARS</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/candy">
                <h2>CANDY</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/candy">
                <h2>DRINKS</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/candy">
                <h2>CRISPS</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/candy">
                <h2>CAKES</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/candy">
                <h2>CEREALS</h2>
              </Link>
            </li>
            <li>
              <Link to="/shop/candy">
                <h2>GUM</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div onMouseLeave={mouseLeaveHandle}>
        <h2 onMouseOver={hoverHandle} id="pick-mix">
          PICK & MIX
        </h2>
        <div
          className="list-link"
          id="pick-mix-links"
          style={{ display: "none" }}
          onMouseLeave={mouseLeaveHandle}
        >
          <ul className="header-links">
            <li>B</li>
            <li>B</li>
            <li>B</li>
            <li>B</li>
          </ul>
        </div>
      </div>
      <div onMouseLeave={mouseLeaveHandle}>
        <h2 onMouseOver={hoverHandle} id="traditional">
          TRADITIONAL
        </h2>
        <div
          className="list-link"
          id="traditional-links"
          style={{ display: "none" }}
          onMouseLeave={mouseLeaveHandle}
        >
          <ul className="header-links">
            <li>C</li>
            <li>B</li>
            <li>B</li>
            <li>B</li>
          </ul>
        </div>
      </div>

      <div onMouseLeave={mouseLeaveHandle}>
        <h2 onMouseOver={hoverHandle} id="dietary">
          DIETARY
        </h2>
        <div
          className="list-link"
          id="dietary-links"
          style={{ display: "none" }}
          onMouseLeave={mouseLeaveHandle}
        >
          <ul className="header-links">
            <li>
              <h2>SUGAR FREE</h2>
            </li>
            <li>
              <h2>HALAL</h2>
            </li>
            <li>
              <h2>FAT FREE</h2>
            </li>
            <li>
              <h2>GLUTEN FREE</h2>
            </li>
            <li>
              <h2>VEGAN</h2>
            </li>
            <li>
              <h2>KOSHER</h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
