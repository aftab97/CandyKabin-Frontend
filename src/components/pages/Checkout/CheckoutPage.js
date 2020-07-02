import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Shipping } from "./Shipping/Shipping";
import { ShoppingList } from "./ShoppingList/ShoppingList";
import UserContext from "../../../context/UserContext";
import BasketContext from "../../../context/BasketContext";

export const CheckoutPage = () => {
  const {
    location,
    setLocation,
    readyForCheckout,
    setReadyForCheckout,
    shoppingCart,
  } = useContext(BasketContext);

  // const {  } = useContext(BasketContext);

  const product = [
    {
      name: "apple",
      price: 0.1,
      amount: 2,
      description: "an apple",
      category: "fruit",
    },
    {
      name: "orange",
      price: 0.1,
      amount: 2,
      description: "an orange",
      category: "fruit",
    },
    {
      name: "mango",
      price: 0.2,
      amount: 3,
      description: "an mango",
      category: "fruit",
    },
  ];

  let total = 0;
  total = product.map(
    (productarray) => (total += productarray.price * productarray.amount)
  );

  const makePayment = async (token, addresses) => {
    let body = {
      token,
      product,
    };

    console.log(token, body);

    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/payment`,
      {
        token,
        product,
      }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      console.log("Success! Check email for details");
    } else {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    console.log(location);

    if (typeof location === "undefined" || shoppingCart.length === 0) {
      console.log("not ready");
      console.log(location);
      setReadyForCheckout(false);
    } else {
      console.log("ready");
      setReadyForCheckout(true);
    }
  }, [shoppingCart]);

  useEffect(() => {
    console.log(location);

    if (typeof location === "undefined" || shoppingCart.length === 0) {
      console.log("not ready");
      console.log(location);
      console.log(shoppingCart);
      console.log(readyForCheckout);
      setReadyForCheckout(false);
    } else {
      console.log("ready");
      console.log(shoppingCart.length);
      setReadyForCheckout(true);
    }
  }, [location]);

  //set location to undefined after leaving the page
  useEffect(() => {
    return () => {
      setLocation(undefined);
    };
  }, []);

  const handleCheckoutDisabledButton = () => {};
  return (
    <div>
      <div className="checkout-section">
        <ShoppingList />
      </div>
      <div className="checkout-section">
        <Shipping />
      </div>
      {readyForCheckout ? (
        <StripeCheckout
          stripeKey="pk_live_51Gm1fBBzvrElWXfA6Rdl7eKc5Udkc65Vyv3JgiNYp4I5qHeoR2exGlPEXMvDhix9KtyZty1AjaCsvht3cyQCuFJR006L4YWTzS"
          token={makePayment}
          billingAddress
          shippingAddress
          amount={total[total.length - 1] * 100}
        />
      ) : (
        <button
          className="disabled-button-checkout"
          onClick={handleCheckoutDisabledButton}
        >
          <span>Pay With Card</span>
        </button>
      )}
      <div>
        <h4>Please select a</h4>
      </div>
    </div>
  );
};
