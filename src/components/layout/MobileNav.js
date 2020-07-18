import React, { useEffect } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  const handleMenuClose = () => {};
  return (
    <div id="hamburger" style={{ display: "none" }}>
      <Collapsible trigger="SHOP">
        <br />
        <br />
        <a href="/shop/international">INTERNATIONAL</a>
        <br />
        <br />
        <a href="/shop/sweets-and-candy">SWEETS & CANDY</a>
        <br />
        <br />
        <a href="/shop/pick-and-mix">PICK & MIX</a>
        <br />
        <br />
        <a href="/shop/traditional">TRADITIONAL</a>
        <br />
        <br />
        <a href="/shop/clearance">CLEARANCE</a>
        <br />
        <br />
      </Collapsible>
      <Collapsible trigger="GIFTS AND HAMPERS">
        <br />
        <br />
        <a href="/gifts-and-hampers/products">PRODUCTS</a>
        <br />
        <br />
      </Collapsible>
      <Collapsible trigger="NEW IN">
        <br />
        <br />
        <a href="/new-in/products">PRODUCTS</a>
        <br />
        <br />
      </Collapsible>
      <Collapsible trigger="MORE">
        <br />
        <br />
        <a href="/about-us">ABOUT US</a>
        <br />
        <br />
        <a href="/frequently-asked-questiions">FREQUENTLY ASKED QUESTIONS</a>
        <br />
        <br />
        <a href="/customer-services">CUSTOMER SERVICES</a>
        <br />
        <br />
        <a href="/allergy-information">ALLERGY INFORMATION</a>
        <br />
        <br />
        <a href="/privacy-policy">PRIVACY POLICY</a>
        <br />
        <br />
      </Collapsible>
    </div>
  );
};
