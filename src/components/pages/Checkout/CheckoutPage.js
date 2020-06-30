import React, { useEffect, useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Shipping } from "./Shipping/Shipping";
import { ShoppingList } from "./ShoppingList/ShoppingList";

export const CheckoutPage = () => {
  //   const [product, setProduct] = useState({
  //     name: "Apple",
  //     price: 1,
  //     amount: 2,
  //     productBy: "Grocery store",
  //   });

  //template checkout array
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

    const response = await axios.post(`${process.env.REACT_APP_URL}/payment`, {
      token,
      product,
    });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      console.log("Success! Check email for details");
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <div>
      <div className="checkout-section">
        <ShoppingList />
      </div>
      <div className="checkout-section">
        <Shipping />
      </div>
      <StripeCheckout
        stripeKey="pk_live_c2WLxTaHIFrljnYGFgVF5dYU00pksoEf8C"
        token={makePayment}
        billingAddress
        shippingAddress
        amount={total[total.length - 1] * 100}
      />
    </div>
  );
};
