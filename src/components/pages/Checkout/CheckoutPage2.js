import React, { useEffect, useReducer, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import UserContext from "../../../context/UserContext";

export const CheckoutPage2 = () => {
  const { userData } = useContext(UserContext);

  const product = [
    {
      id: "knaskjdnaskjlnd",
      name: "apple",
      price: 0.1,
      amount: 2,
      description: "an apple",
      category: "fruit",
    },
    {
      id: "knaskjdnaskjlnd",
      name: "orange",
      price: 0.1,
      amount: 2,
      description: "an orange",
      category: "fruit",
    },
    {
      id: "knaskjdnaskjlnd",
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
      userData,
    };

    console.log(token, body);

    const response = await axios.post(`${process.env.REACT_APP_URL}/payment`, {
      token,
      product,
      userData,
    });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      console.log("Success! Check email for details");
    } else {
      console.log("something went wrong");
    }
  };

  let stripeKey = process.env.REACT_APP_STRIPE_KEY;

  return (
    <div className="sr-root">
      <StripeCheckout
        stripeKey={stripeKey}
        token={makePayment}
        billingAddress
        shippingAddress
        amount={total[total.length - 1] * 100}
      />
    </div>
  );
};
