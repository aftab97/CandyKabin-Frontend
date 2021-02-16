import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { PaymentLookup } from "./AdminPages/PaymentLookup";
import { AddProducts } from "./AdminPages/AddProducts";
import { TrackLocations } from "./AdminPages/TrackLocations";
import { EmailInStock } from "./AdminPages/EmailInStock";

export const index = () => {
  return (
    <div>
      <div className="sidepanel-container">
        <div>
          <button className="sidepanel-option">
            <Link to="/admin/payment-lookup">PAYMENT LOOKUP</Link>
          </button>
        </div>
        <div>
          <button className="sidepanel-option">
            <Link to="/admin/add-products">ADD PRODUCTS</Link>
          </button>
        </div>
        <div>
          <button className="sidepanel-option">
            <Link to="/admin/track-location">TRACK LOCATIONS</Link>
          </button>
        </div>
        <div>
          <button className="sidepanel-option">
            <Link to="/admin/email-in-stock">EMAIL BACK IN STOCK</Link>
          </button>
        </div>
      </div>

      <Route
        path="/admin/payment-lookup"
        // exact
        // component={ChocolateBars}

        render={() => <PaymentLookup />}
      />
      <Route
        path="/admin/add-products"
        // exact
        // component={ChocolateBars}

        render={() => <AddProducts />}
      />
      <Route path="/admin/track-location" render={() => <TrackLocations />} />
      <Route path="/admin/email-in-stock" render={() => <EmailInStock />} />
    </div>
  );
};
