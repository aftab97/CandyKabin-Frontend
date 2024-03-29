import React, { useEffect, useReducer, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import UserContext from "../../../context/UserContext";
import BasketContext from "../../../context/BasketContext";

export const CheckoutPage2 = () => {
  const { userData } = useContext(UserContext);

  const { shoppingCart, productCost, totalCost, deliveryCost } = useContext(
    BasketContext
  );

  // let product;

  // useEffect(() => {
  //   product = shoppingCart;
  // }, [shoppingCart]);

  // product = [
  //   {
  //     _id: "knaskjdnaskjlnd",
  //     name: "apple",
  //     price: 0.1,
  //     amount: 2,
  //     description: "an apple",
  //     category: "fruit",
  //   },
  //   {
  //     _id: "knaskjdnaskjlnd",
  //     name: "orange",
  //     price: 0.1,
  //     amount: 2,
  //     description: "an orange",
  //     category: "fruit",
  //   },
  //   {
  //     _id: "knaskjdnaskjlnd",
  //     name: "mango",
  //     price: 0.2,
  //     amount: 3,
  //     description: "an mango",
  //     category: "fruit",
  //   },
  // ];

  let total = 0;
  total = shoppingCart.map(
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

    console.log(totalCost);
    console.log(deliveryCost);
    console.log(productCost);

    console.log(token, body);

    const response = await axios.post(`${process.env.REACT_APP_URL}/payment`, {
      token,
      shoppingCart,
      userData,
      productCost,
      totalCost,
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

  // useEffect(() => {
  //   // let product = shoppingCart;

  //   // console.log(shoppingCart.map((item) => item.productName));

  //   if (shoppingCart.length > 0) {
  //     const doFunc = async () => {
  //       const response = await axios.post(`${process.env.REACT_APP_URL}/test`, {
  //         // shoppingCart: JSON.stringify(shoppingCart),
  //         shoppingCart: shoppingCart,
  //       });
  //     };
  //     doFunc();
  //   }
  // }, [shoppingCart]);

  let stripeKey = process.env.REACT_APP_STRIPE_KEY;

  return (
    <div className="sr-root">
      <StripeCheckout
        stripeKey={stripeKey}
        token={makePayment}
        billingAddress
        shippingAddress
        amount={totalCost * 100}
      />
      <button onClick={makePayment}>check</button>
    </div>
  );
};
