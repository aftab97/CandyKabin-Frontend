import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { PaymentLookup } from "./AdminPages/PaymentLookup";

export const index = () => {
  return (
    <div>
      <Route to="/payment-lookup" component={PaymentLookup} />
    </div>
  );
};
