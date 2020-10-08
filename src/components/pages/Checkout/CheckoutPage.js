import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Shipping } from "./Shipping/Shipping";
import { ShoppingList } from "./ShoppingList/ShoppingList";
import UserContext from "../../../context/UserContext";
import BasketContext from "../../../context/BasketContext";
import { useHistory } from "react-router-dom";

export const CheckoutPage = () => {
  const history = useHistory();

  const [displayMessage, setDisplayMessage] = useState(0);

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
    discount,
    setDiscount,
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

  let newTotalCost = 0;

  const makePayment = async (token, addresses) => {
    let body = {
      token,
      shoppingCart,
      userData,
      productCost,
      totalCost,
      deliveryCost,
    };

    // newTotalCost = (productCost * (100 - discount)) / 100 + deliveryCost;
    newTotalCost = (
      productCost * ((100 - discount) / 100) +
      deliveryCost
    ).toFixed(2);

    const response = await axios.post(`${process.env.REACT_APP_URL}/payment`, {
      token,
      shoppingCart,
      userData,
      productCost,
      newTotalCost: newTotalCost,
      deliveryCost,
      location,
    });
    const { status } = response.data;
    console.log("Response:", response.data);

    if (status === "success") {
      console.log("Success! Check email for details");
      history.push("/success");
    } else {
      console.log("something went wrong");
      setDisplayMessage(1);
    }
  };

  useEffect(() => {
    console.log("calculating payment");

    let cost = (productCost * ((100 - discount) / 100) + deliveryCost).toFixed(
      2
    );
    console.log("cost: " + cost);
  });

  useEffect(() => {
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
      setDiscount(0);
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

  const handleCheckoutDisabledButton2 = () => {
    // let x = document.getElementsByClassName("hidden-message-pop-up-2");
    // x.style.display = "block";
    console.log("setting display to block");
    setDisplayMessage("block");
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
            amount={newTotalCost * 100}
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

            <div
              className="hidden-message-pop-up-2"
              style={{ opacity: displayMessage }}
            >
              <h2>
                Your payment was unsuccessful. Please try again or try
                contacting Candy Kabin.
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
