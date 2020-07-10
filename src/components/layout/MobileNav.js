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
    </div>
  );
};
