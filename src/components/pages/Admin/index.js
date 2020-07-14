import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { PaymentLookup } from "./AdminPages/PaymentLookup";
import { AddProducts } from "./AdminPages/AddProducts";

export const index = () => {
  return (
    <div>
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
    </div>
  );
};
