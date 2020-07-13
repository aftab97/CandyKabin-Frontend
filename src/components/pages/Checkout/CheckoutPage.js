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
    setDeliveryCost,
    deliveryCost,
    productCost,
    totalCost,
  } = useContext(BasketContext);

  const { userData } = useContext(UserContext);
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
      shoppingCart,
      userData,
      productCost,
      totalCost,
      deliveryCost,
    };

    console.log(token, body);

    const response = await axios.post(`${process.env.REACT_APP_URL}/payment`, {
      token,
      shoppingCart,
      userData,
      productCost,
      totalCost: productCost + deliveryCost,
      deliveryCost,
    });
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
      setReadyForCheckout(false);
    } else {
      setReadyForCheckout(true);
    }
  }, [shoppingCart]);

  useEffect(() => {
    console.log(location);

    if (typeof location === "undefined" || shoppingCart.length === 0) {
      setReadyForCheckout(false);
    } else {
      setReadyForCheckout(true);
    }
  }, [location]);

  //set location to undefined after leaving the page
  useEffect(() => {
    return () => {
      setLocation(undefined);
      setDeliveryCost(0);
    };
  }, []);

  let stripeKey = process.env.REACT_APP_STRIPE_KEY;

  const handleCheckoutDisabledButton = () => {
    let x = document.getElementById("hidden-message-pop-up");
    let displayValue = window.getComputedStyle(x).display;

    if (displayValue === "none") {
      x.style.display = "block";
    }
  };
  return (
    <div className="checkout-page">
      <div className="checkout-section">
        <Shipping />
      </div>
      <div className="checkout-section">
        <ShoppingList />
      </div>

      <div className="payment-button-container">
        {readyForCheckout ? (
          <StripeCheckout
            stripeKey={stripeKey}
            token={makePayment}
            currency="GBP"
            billingAddress
            shippingAddress
            amount={(productCost + deliveryCost) * 100}
          />
        ) : (
          <>
            <button
              className="disabled-button-checkout"
              onClick={handleCheckoutDisabledButton}
            >
              <span>Pay With Card</span>
            </button>

            <div id="hidden-message-pop-up">
              <h4>
                Please select your shipping location to continue with your
                payment
              </h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
